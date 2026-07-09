import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destDir = path.join(__dirname, 'dist');

function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursive(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  console.log('Cleaning existing /dist folder...');
  if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, { recursive: true, force: true });
  }
  fs.mkdirSync(destDir, { recursive: true });

  console.log('Copying static assets from root to /dist...');
  fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(destDir, 'index.html'));
  fs.copyFileSync(path.join(__dirname, 'styles.css'), path.join(destDir, 'styles.css'));
  fs.copyFileSync(path.join(__dirname, 'icon.jpg'), path.join(destDir, 'icon.jpg'));
  fs.copyFileSync(path.join(__dirname, 'favicon.ico'), path.join(destDir, 'favicon.ico'));
  fs.copyFileSync(path.join(__dirname, 'manifest.json'), path.join(destDir, 'manifest.json'));
  copyRecursive(path.join(__dirname, 'modules'), path.join(destDir, 'modules'));
  console.log('Static build succeeded! All files copied to /dist');
} catch (err) {
  console.error('Build failed:', err);
  process.exit(1);
}
