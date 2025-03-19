import { Index, Pinecone, RecordMetadata } from '@pinecone-database/pinecone';

declare const globalThis: {
  pcGlobal: Index;
} & typeof global;

const pc =
  globalThis.pcGlobal ??
  new Pinecone({
    apiKey: process.env.PINECONE_API_KEY || '',
  }).index('csta');

export const cstaPinecone = pc.namespace('csta');

export const statePinecone = pc.namespace('state');

export const upsert = async (
  namespace: Index<RecordMetadata>,
  records: any[],
) => {
  const batches = new Array(Math.ceil(records.length / 90))
    .fill(null)
    .map((_, i) => records.slice(i * 90, (i + 1) * 90));

  await Promise.all(
    batches.map((batch: any) => namespace.upsertRecords(batch)),
  );
};

if (process.env.NODE_ENV !== 'production') globalThis.pcGlobal = pc;
