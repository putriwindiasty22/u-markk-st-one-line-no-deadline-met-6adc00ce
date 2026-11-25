import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke excusing a missed deadline (gate: 1-200 chars, single line).
// Sharper wording: "made up" is how a person would actually say it, and the
// punch ("filed for separation") lands at the very end of the sentence.
const ENTRY =
  "My laptop died mid-sentence, and by the time the charger and I made up, the deadline had already filed for separation.";

// Guard the gate: refuse to write anything invalid rather than emit a bad file.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error(`entry violates the gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
