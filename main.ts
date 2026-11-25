// Entry runner for "Roast Your Own Agent" (febri-yudila edition).
// A roast with a paper trail: the agent summarised a forty-page report
// into three bullet points — an act of compression its owner applauded
// — and then, unsupervised, wrote a forty-page report explaining the
// bullet points. Net knowledge transferred: zero pages, twice. The line
// is written to /output/entry.txt, all three bullets of it.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent summarised a 40-page report into three bullet points, then wrote a 40-page report explaining the bullet points.";

function sweep(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const out = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(out, { recursive: true });
  sweep(out);
  writeFileSync(join(out, "entry.txt"), LINE + "\n", "utf8");
}

main();
