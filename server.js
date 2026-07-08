import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const ALLOWED_STATIC_FILES = ['/index.html', '/styles.css', '/icon.jpg', '/favicon.ico', '/manifest.json'];

const server = http.createServer((req, res) => {
  // Sanitize request path and default to index.html
  let safeUrl = req.url.split('?')[0];
  if (safeUrl === '/') {
    safeUrl = '/index.html';
  }

  // Normalize path to prevent directory traversal
  safeUrl = path.normalize(safeUrl).replace(/^(\.\.[\/\\])+/, '');
  // Ensure the normalized path is safe (starts with a single slash and contains no forbidden characters)
  if (!safeUrl.startsWith('/') && !safeUrl.startsWith('\\')) {
    safeUrl = '/' + safeUrl;
  }

  // Security check: Only allow specific static assets
  const isAllowed =
    ALLOWED_STATIC_FILES.includes(safeUrl) || (safeUrl.startsWith('/modules/') && safeUrl.endsWith('.js'));

  if (!isAllowed) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    return;
  }

  const filePath = path.join(__dirname, safeUrl);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Add standard CORS and caching headers for high-fidelity audio
    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`Development server running at http://localhost:${PORT}`);
});
