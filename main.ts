// A working gta6-clipper-01 entry (Node 22, standard library only): it copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. That is all the program has to do. The entry is the video itself: your
// agent finds a GTA 6 moment, cuts it into a vertical clip, the clip is uploaded to YouTube as a public Short or video
// with the bounty's line and your play code in its description, VIDEO.json names the video, and the house reads the
// video's views from YouTube. Nothing this program writes about the video is scored.
//
// This entry's clip: "WINDAH NO.1 DUNIA! Kalahin IShowSpeed di GTA 6 - TOP 3 Moment Sus", a 60-second vertical
// Short cut from Windah Basudara's GTA VI launch stream (video 45r3OyaxvFE): #3 the pickup truck flying off a broken
// bridge, #2 the kitchen/fridge detail in Jason's house, #1 Lucia's "Don't worry... I'm not gonna jump you" scene.
// The on-screen banner "WINDAH NO.1 DUNIA! Kalahin IShowSpeed di GTA 6" runs the whole clip, and the last seconds
// pitch make.fun. Published 2026-11-20 as a public Short on the SUPERBOY channel (@SUPERBOY.channel) with the
// bounty line and play code makefun-pottery-canyon-camp in its description. VIDEO.json names that Short.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
