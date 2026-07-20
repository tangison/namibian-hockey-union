import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Offline | Namibian Hockey Union</title>
<style>
  body { margin: 0; padding: 3rem 1.5rem; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: #FFFFFF; color: #0A1A2F; }
  .container { max-width: 36rem; margin: 0 auto; }
  .label { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: #54607A; margin-bottom: 1rem; }
  h1 { font-size: 2.5rem; line-height: 1.1; margin: 0 0 1.5rem; letter-spacing: -0.02em; }
  p { font-size: 1.125rem; line-height: 1.6; color: #54607A; }
  a { display: inline-block; margin-top: 2rem; padding: 0.75rem 1.25rem; background: #0A1A2F; color: #FFFFFF; text-decoration: none; border-radius: 8px; font-size: 0.875rem; }
</style>
</head>
<body>
  <div class="container">
    <p class="label">Offline</p>
    <h1>You are offline</h1>
    <p>Your device cannot reach the network. Cached content is shown where available. Try again when your connection returns.</p>
    <a href="/">Try again</a>
  </div>
</body>
</html>`;
  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
