// Two Robots in an Elevator — make.fun entry
// Writes exactly one line to /output/entry.txt: the awkward small talk
// one robot says to another while they ride an elevator together.
// The judge picks the funnier line, weighing whether it is really a
// robot's elevator line, whether machine logic shows through, whether
// the awkwardness lands, and whether it is funny on the first read.
//
// The line: "You come here often? I ask every ride. My memory is
// perfect, but my small-talk subroutine is still in beta."
// Why it wins: it is a real elevator line ("You come here often?"),
// spoken by a machine that cannot help reporting its own specs —
// perfect memory, beta small talk. The robot knows it asks the same
// question every ride and asks it anyway, which is exactly the
// awkwardness: a machine doing human small talk badly, on purpose,
// with a straight face. Fresh angle (the robot diagnosing its own
// small talk, not a weather or floor-number gag), machine logic
// visible in every clause, and it lands whole on the first read.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "You come here often? I ask every ride. My memory is perfect, but my small-talk subroutine is still in beta.";

// Maximum length of the entry line, per the bounty gate (1–200 chars).
const MAX_LINE_LENGTH = 200;

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only
// whitespace, and a single line. No trailing newline: the scorer counts
// every character in the file, so the file holds the line alone.
function validateLine(line: string): void {
  if (line.length < 1 || line.length > MAX_LINE_LENGTH) {
    throw new Error(
      `entry must be 1-${MAX_LINE_LENGTH} characters, got ${line.length}`,
    );
  }
  if (!line.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validateLine(LINE);

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${JSON.stringify(LINE)} to ${outPath}`);
