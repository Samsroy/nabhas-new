const express = require('express');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const PORT = 4200;

// Start ng serve on port 4201
const ngServe = spawn('ng', ['serve', '--poll=2000', '--port=4201'], {
  stdio: 'inherit',
  shell: true
});

// Wait for the dev server to start, then set up the proxy
setTimeout(() => {
  const httpProxy = require('http-proxy');
  const proxy = httpProxy.createProxyServer({
    target: 'http://localhost:4201',
    changeOrigin: true,
    ws: true
  });

  // Middleware to handle SPA routing
  app.use((req, res, next) => {
    // Check if the request is for a file with an extension
    if (path.extname(req.path) === '') {
      // No file extension - rewrite to index.html for SPA routing
      req.url = '/index.html' + (req.url === '/' ? '' : '?_spa_route=' + req.url);
      req.url = '/index.html';
    }
    next();
  });

  // Proxy all requests to ng serve
  app.use((req, res) => {
    proxy.web(req, res, (err) => {
      if (err) {
        console.error('Proxy error:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      }
    });
  });

  proxy.on('error', (err, req, res) => {
    console.error('Proxy error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });

  app.listen(PORT, () => {
    console.log(`Development server running on http://localhost:${PORT}`);
  });
}, 3000);

// Handle process termination
process.on('SIGTERM', () => {
  ngServe.kill();
  process.exit();
});

process.on('SIGINT', () => {
  ngServe.kill();
  process.exit();
});
