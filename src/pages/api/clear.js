import { NextApiRequest, NextApiResponse } from "next";
import { deleteCache } from "lib/db/cache";
import { deleteRender, getRender } from "lib/db/renders";

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const { inputId } = body;

  await deleteCache(inputId);
  const render = await getRender(inputId);
  if (!render) {
    throw new Error("Could not get progress for " + inputId);
  }
  await deleteRender(render);
  res.status(200).json({});
}
