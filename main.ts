// news-image-20261118 entry (Node 22, standard library only).
// The image is entry.png beside this file; the program copies it to
// /output/entry.png. Deterministic: the same bytes every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const src = new URL("./entry.png", import.meta.url);
if (!existsSync(src)) {
  console.error("entry.png not found next to main.ts");
  process.exit(1);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
console.log("wrote " + join(outDir, "entry.png"));
