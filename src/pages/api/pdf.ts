import { oaiClient } from '@/helpers/openai';
import { readFile } from 'fs/promises';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Formidable } from 'formidable';
import { cstaPinecone } from '@/helpers/pinecone';
import { prisma } from '@/helpers/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const form = new Formidable();
  const [fields, files] = await form.parse(req);

  const confidence = +(fields.confidence?.at(0) || 0.5);
  const file = files.file?.at(0);

  if (!file) return;

  const base64File = await readFile(file.filepath).then((buffer) =>
    buffer.toString('base64'),
  );

  const chat = await oaiClient.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: [
          {
            // @ts-expect-error Property 'type' does not exist on type 'string'.
            type: 'file',
            file: {
              'file_data': 'data:application/pdf;base64,' + base64File,
              'filename': file.originalFilename || 'file',
            },
          },
          {
            type: 'text',
            text:
              'Give me some CSTA standards that this document aligns with. ' +
              'For example: "Model how information is broken down into smaller pieces, transmitted as packets through multiple devices over networks and the Internet, and reassembled at the destination."' +
              'Only respond with the standards and no other text. Separate each standard with an enter.',
          },
        ],
      },
    ],
  });

  const standards = (chat.choices[0].message.content || '')
    .split('\n')
    .filter(Boolean);

  const realStandards = await Promise.all(
    standards.map((standard) =>
      cstaPinecone.searchRecords({
        query: {
          topK: 1,
          inputs: {
            text: standard,
          },
        },
      }),
    ),
  ).then((result) =>
    result
      .map((result) => result.result.hits[0])
      .filter(({ _score }) => _score > confidence),
  );

  const relatedStandards = await prisma.cstaStandard
    .findMany({
      where: {
        id: {
          in: realStandards.map(({ _id }) => _id),
        },
      },
      include: {
        stateStandards: {
          include: {
            stateStandard: true,
          },
        },
      },
    })
    .then((standards) =>
      standards.sort(
        (a, b) =>
          realStandards.findIndex(({ _id }) => _id === a.id) -
          realStandards.findIndex(({ _id }) => _id === b.id),
      ),
    );

  res.status(200).json(
    relatedStandards.map((standard, i) => ({
      ...standard,
      stateStandards: standard.stateStandards.map(
        ({ stateStandard, confidence }) => ({ ...stateStandard, confidence }),
      ),
      confidence: realStandards[i]._score,
    })),
  );
}

export const config = {
  api: {
    bodyParser: false,
  },
};
