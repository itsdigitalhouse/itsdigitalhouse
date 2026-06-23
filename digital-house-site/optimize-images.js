import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputDir = path.join(__dirname, 'src/assets');
const backupDir = path.join(__dirname, 'src/assets-backup'); // safety copy

const MAX_WIDTH = 1600; // zaroorat ke hisaab se adjust kar sakte ho

function copyOriginalsForBackup() {
  if (fs.existsSync(backupDir)) {
    console.log('⚠ Backup already exists, skip kar rahe hain (purana backup safe hai)\n');
    return;
  }
  fs.cpSync(inputDir, backupDir, { recursive: true });
  console.log(`✓ Backup bana diya: src/assets-backup\n`);
}

let totalOriginal = 0;
let totalNew = 0;
let processedCount = 0;

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (path.resolve(fullPath) === path.resolve(backupDir)) return;
      walkDir(fullPath);
      return;
    }

    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

    const relativePath = path.relative(inputDir, fullPath);
    const originalSize = stat.size;
    const tempPath = fullPath + '.tmp';

    let pipeline = sharp(fullPath).resize({ width: MAX_WIDTH, withoutEnlargement: true });

    if (ext === '.png') {
      pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
    } else {
      pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
    }

    pipeline
      .toFile(tempPath)
      .then(() => {
        fs.renameSync(tempPath, fullPath); // same filename pe overwrite
        const newSize = fs.statSync(fullPath).size;
        const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
        totalOriginal += originalSize;
        totalNew += newSize;
        processedCount++;
        console.log(`✓ ${relativePath} — ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (${savings}% smaller)`);
      })
      .catch((err) => console.error(`✗ Error on ${relativePath}:`, err.message));
  });
}

console.log('Step 1: Backup le rahe hain (safety)...\n');
copyOriginalsForBackup();
console.log('Step 2: Optimize kar rahe hain (same filenames pe overwrite)...\n');
walkDir(inputDir);

process.on('exit', () => {
  if (processedCount > 0) {
    console.log(`\n--- SUMMARY ---`);
    console.log(`Total images processed: ${processedCount}`);
    console.log(`Total before: ${(totalOriginal/1024).toFixed(0)} KB`);
    console.log(`Total after: ${(totalNew/1024).toFixed(0)} KB`);
    console.log(`Total saved: ${((1 - totalNew/totalOriginal)*100).toFixed(1)}%`);
  }
});