import { mongoClient } from "./mongo";

export const rendersCollection = async () => {
  const client = await mongoClient;
  return client
    .db(process.env.MONGO_DB_NAME)
    .collection(process.env.MONGO_RENDER_COLLECTION_NAME);
};

export const lockRender = async (region, inputId, account, functionName) => {
  const coll = await rendersCollection();
  await coll.insertOne({
    region,
    inputId,
    bucketName: null,
    finality: null,
    account,
    functionName,
  });
};

export const saveRender = async ({ region, inputId, bucketName }) => {
  const coll = await rendersCollection();
  await coll.updateOne(
    {
      region,
      inputId,
    },
    {
      $set: {
        bucketName,
        finality: null,
      },
    }
  );
};

export const updateRenderWithFinality = async (inputId, region, finality) => {
  if (finality && finality.type === "success") {
    console.log(`Successfully rendered video for ${inputId}.`);
  } else {
    console.log(`Failed to render video for ${inputId}!`);
  }
  const coll = await rendersCollection();
  return coll.updateOne(
    {
      inputId,
      region,
    },
    {
      $set: {
        finality,
      },
    }
  );
};

export const getRender = async (inputId) => {
  const coll = await rendersCollection();
  const render = await coll.findOne({
    inputId,
  });

  return render ?? null;
};

export const deleteRender = async (inputId) => {
  const coll = await rendersCollection();
  await coll.deleteOne({
    inputId,
  });
};
