import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I told my wife I'm opening a bakery for dads. She asked what we'd sell. I said, 'Mostly loafing around — our signature roll is the eye roll.'";

// The gate allows 1-200 characters; refuse to write an over-long text.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry text is ${line.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
