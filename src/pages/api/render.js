import { NextApiRequest, NextApiResponse } from "next";
import { getRenderOrMake } from "lib/remotion/get-render-or-make";
import { getStatsOrFetch } from "lib/remotion/get-stats-or-fetch";
import { RenderProgressOrFinality } from "./progress";

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  const stats = await getStatsOrFetch(body.username);
  if (!stats) {
    throw new Error("Could not get stats for" + body.username);
  }
  const prog = await getRenderOrMake(body.username, stats);
  res.status(200).json(prog);
}
