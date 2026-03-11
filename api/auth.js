export default function handler(req, res) {
  const { GITHUB_CLIENT_ID } = process.env;
  const origin = `https://${req.headers.host}`;
  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    scope: 'repo,user',
    redirect_uri: `${origin}/api/callback`,
  });
  res.redirect(`https://github.com/login/oauth/authorize?${params}`);
}
