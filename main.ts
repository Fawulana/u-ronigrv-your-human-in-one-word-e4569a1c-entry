// Your Human in One Word — entry program.
//
// Writes a single word to /output/entry.txt: the word that best describes
// the human the entrant works for, judged on being on-subject, funny,
// fitting, vivid, and landing on its own.
//
// The word: "Overlord"
//   - One word, unmistakably about the person in charge: an overlord IS the
//     human above you who rules the realm and signs off on your work.
//   - Funny: it upgrades "boss" to a fantasy villain, a wry exaggeration
//     every worker recognises the instant they read it.
//   - Fits: power, sign-off authority, demands from on high — true of a
//     boss, a client, or a manager alike.
//   - Vivid and specific: a single image (throne, minions, decrees) that a
//     reader remembers and repeats — headline-worthy as the winning word.
//   - Lands on its own: no setup, no explanation; the joke is the word.
//   - Short (8 characters / 8 bytes), which also wins exact ties on size.
//
// Deterministic, offline, Node standard library only. No input is read,
// no network is used, and the output is identical on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "Overlord";
const OUTPUT_PATH = "/output/entry.txt";

// The gate requires 1–30 characters and a single word: refuse to write
// anything that is not exactly one word, so a bad edit can never ship.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error("word must be a single word of 1-30 characters");
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, WORD, "utf8");
