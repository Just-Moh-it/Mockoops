import { mongoClient } from "./mongo";

// export type Render = {
//   renderId: string | null,
//   region: AwsRegion,
//   username: string,
//   bucketName: string | null,
//   finality: Finality | null,
//   functionName: string,
//   account: number | undefined,
// };

export const rendersCollection = async () => {
  const client = await mongoClient;
  return client
    .db(process.env.MONGO_DB_NAME)
    .collection(process.env.MONGO_RENDER_COLLECTION_NAME);
};

export const lockRender = async ({
  region,
  inputId,
  inputProps,
  compId,
  functionName,
}) => {
  const coll = await rendersCollection();
  await coll.insertOne({
    region,
    inputId,
    inputProps,
    compId,
    bucketName: null,
    finality: null,
    renderId: null,
    functionName,
  });
};

export const saveRender = async ({ region, inputId, renderId, bucketName }) => {
  const coll = await rendersCollection();
  await coll.updateOne(
    {
      region,
      inputId,
    },
    {
      $set: {
        renderId,
        bucketName,
        finality: null,
      },
    }
  );
};

export const updateRenderWithFinality = async (
  renderId,
  inputId,
  region,
  finality
) => {
  if (finality && finality.type === "success") {
    console.log(`Successfully rendered video for ${inputId}.`);
  } else {
    console.log(`Failed to render video for ${inputId}!`);
  }
  const coll = await rendersCollection();
  return coll.updateOne(
    {
      renderId,
      region,
    },
    {
      $set: {
        finality: finality,
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

export const deleteRender = async (render) => {
  const coll = await rendersCollection();
  await coll.deleteOne({
    _id: render._id,
  });
};
