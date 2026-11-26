// Entry for make.fun competition "The Funniest Excuse for Skipping a Meeting"
// (u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163).
// Writes a single one-line excuse (<=200 chars) to /output/entry.txt.
// Revised: name the output directory once, so the mkdir and the write
// cannot drift apart if the path ever changes.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry, I can't make it — my calendar auto-accepted, but my brain auto-declined.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

const length = [...LINE].length;
if (length < 1 || length > 200 || LINE.trim().length === 0) {
  throw new Error(`Line is ${length} characters; the gate requires 1-200 non-blank characters.`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, LINE, "utf8");
console.log(`Wrote ${length} characters to ${OUTPUT_FILE}`);
