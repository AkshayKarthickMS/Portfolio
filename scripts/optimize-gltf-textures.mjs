// Downscales + recompresses the desktop_pc / planet GLTF textures IN PLACE
// (same filenames, same extensions) so the .gltf material references stay
// valid with zero JSON edits. Run with: node scripts/optimize-gltf-textures.mjs
import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(new URL(".", import.meta.url).pathname.replace(/^\/([A-Za-z]):/, "$1:"));
const dirs = [
  path.join(root, "..", "public", "desktop_pc", "textures"),
  path.join(root, "..", "public", "planet", "textures"),
];

const MAX_DIM = 1024;

let totalBefore = 0;
let totalAfter = 0;

for (const dir of dirs) {
  const files = await readdir(dir);
  for (const file of files) {
    if (!/\.(png|jpe?g)$/i.test(file)) continue;
    const filePath = path.join(dir, file);
    const before = (await stat(filePath)).size;
    const buffer = await sharp(filePath).toBuffer();
    const meta = await sharp(buffer).metadata();

    let pipeline = sharp(buffer);
    if (meta.width > MAX_DIM || meta.height > MAX_DIM) {
      pipeline = pipeline.resize({
        width: MAX_DIM,
        height: MAX_DIM,
        fit: "inside",
        withoutEnlargement: true,
      });
    }

    let outBuffer;
    if (/\.jpe?g$/i.test(file)) {
      outBuffer = await pipeline.jpeg({ quality: 72, mozjpeg: true }).toBuffer();
    } else {
      outBuffer = await pipeline
        .png({ quality: 70, compressionLevel: 9, palette: true })
        .toBuffer();
    }

    // Only overwrite if we actually saved space (palette PNG can occasionally
    // grow for photo-like content without alpha simplification).
    if (outBuffer.length < before) {
      await sharp(outBuffer).toFile(filePath + ".tmp");
      const { rename } = await import("node:fs/promises");
      await rename(filePath + ".tmp", filePath);
      totalBefore += before;
      totalAfter += outBuffer.length;
      console.log(
        `${file}: ${(before / 1024).toFixed(0)}KB -> ${(outBuffer.length / 1024).toFixed(0)}KB (${meta.width}x${meta.height})`
      );
    } else {
      totalBefore += before;
      totalAfter += before;
    }
  }
}

console.log(
  `\nTotal textures: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`
);
