import { getSession } from "next-auth/react";

import { lists, APIRequest } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (req.method === "GET") {
    const results = await lists(session, req.query);
    return res.status(200).json(results);
  }

  if (req.method === "POST" || req.method === "PUT") {
    const { body, method } = req;
    const results = await APIRequest(body, method, null, session);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}
