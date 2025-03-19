import OpenAI from 'openai';

declare const globalThis: {
  openAiGlobal: OpenAI;
} & typeof global;

export const oaiClient =
  globalThis.openAiGlobal ?? new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const promptMany = async (prompts: string[]) => {
  const batches = new Array(Math.ceil(prompts.length / 250))
    .fill(null)
    .map((_, i) => prompts.slice(i * 250, (i + 1) * 250));

  let responses: string[] = [];

  for (const batch of batches) {
    responses = responses.concat(
      await Promise.all(
        batch.map((prompt) =>
          oaiClient.chat.completions
            .create({
              model: 'gpt-4o-mini',
              messages: [{ role: 'user', content: prompt }],
              max_tokens: 100,
            })
            .then((res) => res.choices[0].message.content || ''),
        ),
      ),
    );
  }

  return responses;
};

if (process.env.NODE_ENV !== 'production') globalThis.openAiGlobal = oaiClient;
