import { getSession } from "next-auth/client";

import { searches, saveSearch } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (req.method === "GET") {
    const results = await searches(req.query, session);
    return res.status(200).json(results);
  }

  if (req.method === "POST") {
    const results = await saveSearch(req?.body, session);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}
