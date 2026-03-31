const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 4200;

// Start ng serve on port 4201
console.log('Starting ng serve on port 4201...');
const ngServe = spawn('ng', ['serve', '--poll=2000', '--port=4201'], {
  stdio: 'inherit',
  shell: true
});

// Wait for ng serve to start
setTimeout(() => {
  const httpProxy = require('http-proxy');

  const proxy = httpProxy.createProxyServer({
    target: 'http://localhost:4201',
    changeOrigin: true,
    ws: true
  });

  // Middleware for SPA routing and asset handling
  app.use((req, res, next) => {
    // Check if the request is for a file (has extension) or is an API call
    const hasFileExtension = path.extname(req.path) !== '';

    if (hasFileExtension || req.path.startsWith('/api')) {
      // File request or API - proxy directly
      proxy.web(req, res, (err) => {
        if (err) {
          console.error('Proxy error:', err);
        }
      });
    } else {
      // SPA route - serve index.html directly from disk
      const indexPath = path.join(__dirname, 'src', 'index.html');
      fs.readFile(indexPath, 'utf8', (err, data) => {
        if (err) {
          // Fallback to proxying if file doesn't exist
          proxy.web(req, res, (err) => {
            if (err) {
              console.error('Proxy error:', err);
            }
          });
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    }
  });

  proxy.on('error', (err, req, res) => {
    console.error('Proxy error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });

  app.listen(PORT, () => {
    console.log(`Dev server proxy running on http://localhost:${PORT}`);
  });
}, 5000);

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('Shutting down...');
  ngServe.kill();
  process.exit();
});

process.on('SIGINT', () => {
  console.log('Shutting down...');
  ngServe.kill();
  process.exit();
});
