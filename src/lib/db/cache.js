import { mongoClient } from "./mongo";

export const collection = async () => {
  const client = await mongoClient;
  return client
    .db(process.env.MONGO_DB_NAME)
    .collection(process.env.MONGO_CACHE_COLLECTION_NAME);
};

export const saveCache = async ({ inputId, inputProps, compId }) => {
  const coll = await collection();
  return coll.insertOne({
    inputId,
    inputProps,
    compId,
  });
};

export const getFromCache = async (inputId) => {
  const coll = await collection();
  const f = await coll.findOne({
    inputId,
  });
  if (f) {
    return f;
  }
  return null;
};

export const deleteCache = async (inputId) => {
  const coll = await collection();
  await coll.deleteMany({
    inputId,
  });
};
