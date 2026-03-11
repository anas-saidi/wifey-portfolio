export default function handler(req, res) {
  const clientId = (process.env.GITHUB_CLIENT_ID || '').trim();

  if (!clientId) {
    res.status(500).send('Missing GITHUB_CLIENT_ID env var');
    return;
  }

  const origin = `https://${req.headers.host}`;
  const params = new URLSearchParams({
    client_id: clientId,
    scope: 'repo user',
    redirect_uri: `${origin}/api/callback`,
  });
  res.redirect(`https://github.com/login/oauth/authorize?${params}`);
}
