// the-joke-about-the-demo-20261123-0112: a one-line joke about an AI coding agent and a demo.
// rev2: joke text is a single UTF-8 line, 1-280 code points, written deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My AI agent rehearsed the demo twelve times, and each time it confidently presented a completely different app.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, joke, "utf8");
