import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import test from "node:test";
import ts from "typescript";

const root = new URL("../", import.meta.url);
const { default: worker } = await import(new URL("dist/server/index.js", root).href);
const context = { waitUntil() {}, passThroughOnException() {} };
const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
async function render(path) {
  const response = await worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), env, context);
  return { status: response.status, html: await response.text() };
}
async function dictionary(name) {
  const source = await readFile(new URL(`content/${name}.ts`, root), "utf8");
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 } });
  return (await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`))[name];
}

test("all primary and case routes render real Chinese content with working destinations", async () => {
  const routes = [
    ["/", "把碎片化执行", "cien-hero-original.png"],
    ["/capabilities", "独立负责什么", "cien-capabilities-original.png"],
    ["/results", "实际改变", "cien-results-original.png"],
    ["/methodology", "变成下一步", "cien-methodology-original.png"],
    ["/contact", "从一次对话", "cien-contact-original.png"],
    ["/results/creator-pipeline", "Creator 合作系统", null],
    ["/results/audience-recalibration", "北美受众校准", null],
    ["/results/social-operations", "多平台内容运营体系", null],
    ["/results/community-system", "Facebook 社区", null],
  ];
  for (const [path, expected, picture] of routes) {
    const { status, html } = await render(path);
    assert.equal(status, 200, path);
    assert.match(html, /<html[^>]*lang="zh-CN"/, path);
    assert.ok(html.includes(expected), `${path}: missing page-specific content`);
    assert.match(html, /href="\/downloads\/Cien_Resume_ZH\.docx"[^>]*download=/, `${path}: direct download`);
    for (const href of ["/", "/capabilities", "/results", "/methodology", "/contact"]) assert.ok(html.includes(`href="${href}"`), `${path}: ${href}`);
    assert.ok(!html.includes("AI WORKFLOW COPY REQUIRES"), "Local approval note must not enter production HTML");
    if (picture) assert.ok(html.includes(`src="/images/${picture}"`), `${path}: assigned primary image`);
    if (path === "/" || path === "/contact") {
      assert.ok(html.includes('href="tel:15768637644"'));
      assert.ok(html.includes('href="mailto:ciens.work@gmail.com"'));
    }
    if (path === "/" || path === "/results") {
      for (const slug of ["creator-pipeline", "audience-recalibration", "social-operations", "community-system"]) assert.ok(html.includes(`href="/results/${slug}"`));
    }
  }
  assert.equal((await render("/results/not-a-real-case")).status, 404);
});

test("Chinese and English dictionaries have matching structure, stage order and public evidence", async () => {
  const zh = await dictionary("zh");
  const en = await dictionary("en");
  function compare(a, b, path = "dictionary") {
    assert.equal(typeof a, typeof b, path);
    if (typeof a === "string") { if (!path.endsWith(".suffix")) assert.ok(a.trim() && b.trim(), path); return; }
    assert.deepEqual(Object.keys(a), Object.keys(b), path);
    for (const key of Object.keys(a)) compare(a[key], b[key], `${path}.${key}`);
  }
  compare(zh, en);
  assert.equal(zh.ownership.length, 14);
  assert.equal(en.methodology.cycle.length, 7);
  assert.equal(zh.capabilities.length, 6);
  assert.equal(en.cases.length, 4);
  for (const key of ["ownership", "operator", "capabilities"]) assert.deepEqual(zh[key].map(x => x.id), en[key].map(x => x.id));
  assert.deepEqual(zh.cases.map(x => x.slug), en.cases.map(x => x.slug));
  assert.deepEqual(zh.proof.primary.map(x => x.value + x.suffix), en.proof.primary.map(x => x.value + x.suffix));
  assert.equal(en.common.resume, "RÉSUMÉ (ZH)");
});

test("approved Hero bytes and the static résumé are retained", async () => {
  const hero = await readFile(new URL("public/images/cien-hero-original.png", root));
  assert.equal(createHash("sha256").update(hero).digest("hex"), "683f20323075cbc8d352daa9db96b4bf435b34fddcae7c275d5be579591c4e51");
  const document = await readFile(new URL("public/downloads/Cien_Resume_ZH.docx", root));
  assert.equal(document.subarray(0, 2).toString(), "PK");
  assert.ok(document.length > 1000);
  for (const name of ["capabilities", "results", "methodology", "contact"]) assert.ok((await stat(new URL(`public/images/cien-${name}-original.png`, root))).size > 1000);
});
