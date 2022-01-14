import { getSession } from "next-auth/react";

import { updateSavedSearch, deleteSavedSearch } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (req.method === "PUT") {
    const results = await updateSavedSearch(req.query?.id, req?.body, session);
    return res.status(200).json(results);
  }

  if (req.method === "DELETE") {
    const results = await deleteSavedSearch(req?.query?.id, session);
    return res.status(200).json(results);
  }
  return res.status(405).end();
}
