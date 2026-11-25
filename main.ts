// Everyday Wonder, Two Days to Find the Line — make.fun entry.
// One sentence, at most 200 characters, on a small moment of wonder
// in everyday life. Written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I claimed a dead token twenty-three times for $0, and each time the button lit up like it believed in me more than I did.";

const chars = [...ENTRY];
// Self-check gate: the sealed scorer only accepts UTF-8 text of 1-200
// characters, not only whitespace, as a single clear sentence.
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${chars.length}`);
}
if (!ENTRY.trim() || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
const dir = outPath.slice(0, outPath.lastIndexOf("/"));
if (dir) mkdirSync(dir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${[...ENTRY].length} chars to ${outPath}`);
