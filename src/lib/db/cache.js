import { mongoClient } from "./mongo";

export const collection = async () => {
  const client = await mongoClient;
  return client
    .db(process.env.MONGO_DB_NAME)
    .collection(process.env.MONGO_CACHE_COLLECTION_NAME);
};

export const saveCache = async (renderId, inputProps) => {
  const coll = await collection();
  return coll.insertOne({
    inputProps,
    renderId,
  });
};

export const getFromCache = async (renderId) => {
  const coll = await collection();
  const f = await coll.findOne({
    renderId,
  });
  if (f) {
    return f.inputProps;
  }
  return null;
};

export const deleteCache = async (renderId) => {
  const coll = await collection();
  await coll.deleteMany({
    renderId,
  });
};
