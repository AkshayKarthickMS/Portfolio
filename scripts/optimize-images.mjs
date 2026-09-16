// One-off image optimization pass: convert remaining raster assets to WebP,
// downscaled to their actual on-screen usage. Run manually with:
//   node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdir, rm } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(new URL(".", import.meta.url).pathname.replace(/^\/([A-Za-z]):/, "$1:"));
const assetsDir = path.join(root, "..", "src", "assets");

// [glob-relative-path, maxWidth, quality]
const jobs = [
  ["linkedin.png", 128, 82],
  ["logo.png", 192, 85],
  ["herobg.png", 1920, 68],
  ["tech/aws.png", 256, 85],
  ["tech/c.png", 256, 85],
  ["tech/css.png", 256, 85],
  ["tech/docker.png", 256, 85],
  ["tech/figma.png", 256, 85],
  ["tech/flask.png", 256, 85],
  ["tech/git.png", 256, 85],
  ["tech/html.png", 256, 85],
  ["tech/javascript.png", 256, 85],
  ["tech/mongodb.png", 256, 85],
  ["tech/mysql.png", 256, 85],
  ["tech/nodejs.png", 256, 85],
  ["tech/python.png", 256, 85],
  ["tech/r.png", 256, 85],
  ["tech/reactjs.png", 256, 85],
  ["tech/redux.png", 256, 85],
  ["tech/tailwind.png", 256, 85],
  ["tech/tf.png", 256, 85],
  ["tech/typescript.png", 256, 85],
];

let totalBefore = 0;
let totalAfter = 0;

for (const [rel, maxWidth, quality] of jobs) {
  const inputPath = path.join(assetsDir, rel);
  const outputPath = inputPath.replace(/\.png$/, ".webp");

  const inputBuffer = await sharp(inputPath).toBuffer();
  const before = inputBuffer.length;

  const image = sharp(inputBuffer).resize({
    width: maxWidth,
    withoutEnlargement: true,
  });

  const outputBuffer = await image.webp({ quality }).toBuffer();
  await sharp(outputBuffer).toFile(outputPath);

  const after = outputBuffer.length;
  totalBefore += before;
  totalAfter += after;

  console.log(
    `${rel} -> ${path.basename(outputPath)}  ${(before / 1024).toFixed(1)}KB -> ${(after / 1024).toFixed(1)}KB`
  );

  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      await rm(inputPath);
      break;
    } catch (err) {
      if (err.code === "EBUSY" && attempt < 4) {
        await new Promise((r) => setTimeout(r, 300));
        continue;
      }
      console.warn(`Could not delete ${inputPath}: ${err.message}`);
    }
  }
}

console.log(
  `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`
);
