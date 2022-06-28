import { NextApiRequest, NextApiResponse } from "next";
import { deleteRender, getRender } from "lib/db/renders";
import { getRenderOrMake } from "lib/remotion/src/get-render-or-make";
import { getStatsOrFetch } from "lib/remotion/src/get-stats-or-fetch";

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  const render = await getRender(body.inputId);
  const stats = await getStatsOrFetch(body.inputId);
  if (!render) {
    throw new Error("Could not get progress for " + body.inputId);
  }
  if (!stats) {
    throw new Error("Could not get stats for" + body.inputId);
  }
  await deleteRender(render);
  const prog = await getRenderOrMake(body.inputId, stats);
  res.status(200).json(prog);
}
