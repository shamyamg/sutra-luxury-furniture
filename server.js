import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

// Serve static assets from Vite dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback for all requests that did not match a static file
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Production web service running on http://0.0.0.0:${PORT}`);
});
