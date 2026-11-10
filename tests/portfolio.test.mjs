import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("contains the bilingual portfolio and contact links", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /Joseph Edim/);
  assert.match(page, /AllFiles\.io/);
  assert.match(page, /name: "Lokki"/);
  assert.match(page, /name: "Maillot Drip"/);
  assert.equal([...page.matchAll(/^    id: "/gm)].length, 3);
  assert.match(page, /https:\/\/all-files-three\.vercel\.app\//);
  assert.match(page, /linkedin\.com\/in\/joseph-edim/);
  assert.match(page, /github\.com\/Kjoris27/);
  assert.match(page, /Gozem/);
  assert.doesNotMatch(page, /Graduate Tech Trainee/);
  assert.match(page, /wa\.me\/22892494828/);
  assert.match(page, /setLang\("fr"\)/);
  assert.match(page, /setLang\("en"\)/);
});

test("ships the public portfolio assets", async () => {
  await Promise.all([
    access(new URL("../public/joseph-edim.png", import.meta.url)),
    access(new URL("../public/Joseph-Edim-CV-2026.pdf", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);
});

test("ships a dedicated mobile navigation and responsive recruiter actions", async () => {
  const [page, styles] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /mobile-menu-button/);
  assert.match(page, /mobile-contact-dock/);
  assert.match(page, /aria-expanded=\{menuOpen\}/);
  assert.match(styles, /@media \(max-width: 680px\)/);
  assert.match(styles, /min-height: 48px/);
});
