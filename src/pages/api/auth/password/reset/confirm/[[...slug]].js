export default async function handler(req, res) {
  if (req.method === "GET") {
    const {
      query: { slug },
    } = req;

    if (slug.length === 2) {
      // redirect to reset form page
      const [uid, token] = slug;
      res.redirect(`/reset-password?uid=${uid}&token=${token}`);
    }
  }

  if (req.method === "POST") {
    const { uid, token, password } = JSON.parse(req?.body);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        new_password1: password,
        new_password2: password,
        uid,
        token,
      }),
    };
    const response = await fetch(
      `${process.env.NEXTAUTH_PROVIDERS_OAUTH_LOGIN_URL}password/reset/confirm/`,
      options
    );
    const result = await response.json();
    return res.json({ success: response.ok, data: result });
  }

  return res.status(405).end();
}
