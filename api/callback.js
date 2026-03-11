export default async function handler(req, res) {
  const { code } = req.query;
  const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ client_id: GITHUB_CLIENT_ID, client_secret: GITHUB_CLIENT_SECRET, code }),
  });

  const { access_token, error } = await tokenRes.json();

  if (error || !access_token) {
    res.status(400).send(`OAuth error: ${error}`);
    return;
  }

  const data = JSON.stringify({ token: access_token, provider: 'github' });

  res.setHeader('Content-Type', 'text/html');
  res.send(`<!DOCTYPE html><html><body><script>
    (function() {
      function receiveMessage(e) {
        window.opener.postMessage(
          'authorization:github:success:' + ${JSON.stringify(data)},
          e.origin
        );
      }
      window.addEventListener('message', receiveMessage, false);
      window.opener.postMessage('authorizing:github', '*');
    })();
  </script></body></html>`);
}
