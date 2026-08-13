import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders Joseph Edim's complete portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Joseph Edim — Full-Stack Software Engineer<\/title>/i);
  assert.match(html, /Joseph Edim/);
  assert.match(html, /AllFiles\.io/);
  assert.match(html, /DziGbodI/);
  assert.match(html, /GOZEM/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("ships the personal assets and removes the disposable preview", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Joseph-Edim-CV-2026\.pdf/);
  assert.match(page, /wa\.me\/22892494828/);
  assert.match(layout, /\/og\.png/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await Promise.all([
    access(new URL("../public/joseph-edim.png", import.meta.url)),
    access(new URL("../public/Joseph-Edim-CV-2026.pdf", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);
});
