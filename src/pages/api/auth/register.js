export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = JSON.parse(req?.body);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data?.email,
        first_name: data?.firstName,
        last_name: data?.lastName,
        password1: data?.password,
        password2: data?.password,
      }),
    };
    const response = await fetch(
      `${process.env.NEXTAUTH_PROVIDERS_OAUTH_LOGIN_URL}registration/`,
      options
    );
    const result = await response.json();
    return res.json({ success: response.ok, data: result });
  }

  return res.status(405).end();
}
