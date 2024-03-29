import { getSession } from "next-auth/react";

import { tweetsInsights } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const session = await getSession({ req });
    const results = await tweetsInsights(req.query, session);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}
