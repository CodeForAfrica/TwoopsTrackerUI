import { getSession } from "next-auth/react";

import { APIRequest } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  const { body, method, query } = req;
  const session = await getSession({ req });

  if (method === "PUT" || method === "PATCH") {
    const results = await APIRequest(body, method, query.listId, session);
    return res.status(200).json(results);
  }

  if (method === "GET" || method === "DELETE") {
    const results = await APIRequest(null, method, query.listId, session);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}
