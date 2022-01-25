export default async function handler(req, res) {
  if (req.method === "POST") {
    const email = JSON.parse(req?.body)?.email;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    };
    const response = await fetch(
      `${process.env.NEXTAUTH_PROVIDERS_OAUTH_LOGIN_URL}password/reset/`,
      options
    );
    const result = await response.json();
    return res.json({ success: response.ok, data: result });
  }

  return res.status(405).end();
}
