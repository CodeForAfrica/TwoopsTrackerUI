import { getSession } from "next-auth/react";

import { getSavedSearches, postSavedSearch } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (req.method === "GET") {
    const results = await getSavedSearches(req.query, session);
    return res.status(200).json(results);
  }

  if (req.method === "POST") {
    const results = await postSavedSearch(req?.body, session);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}
