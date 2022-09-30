import { getSession } from "next-auth/react";

import { uploadFile } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (req.method === "POST") {
    return uploadFile(req, res, session);
  }
  return res.status(405).end();
}

export const config = {
  api: {
    bodyParser: false,
  },
};
