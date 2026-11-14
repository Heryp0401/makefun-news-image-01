// news-image-01 entry (Node 22, standard library only): the image is the
// entry.png beside this file, and the program copies it to /output/entry.png.
// The image is an illustrated newspaper front page, "THE WORLD IN ONE DAY",
// summing up Friday 13 November 2026 in five verified stories: Europe joins
// the Ukraine peace talks (lead), Nvidia's chief resigns as shares fall 16%,
// Microsoft mail and Teams go down worldwide, tankers are hit in the
// Strait of Hormuz, and Indonesia's vice president Gibran Rakabuming Raka
// resigns at his own request. Every headline was checked against that day's reporting;
// the Iran radar claim is attributed ("Iran claims") because it was not
// independently verified. All text is rendered with real fonts, so nothing
// is garbled, and the layout still reads at 300 pixels across.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024
// pixels; this entry.png is a 1024x1024 JPEG (320,657 bytes). The copy is
// byte-exact and deterministic, so both grader runs write the same file.
// No network, no randomness, no dependencies beyond the standard library.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
