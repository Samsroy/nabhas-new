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
    ws: true,
    pathRewrite: {
      '^(?!.*\\.)': '/index.html'
    }
  });

  // Proxy all requests
  app.use((req, res) => {
    proxy.web(req, res, (err) => {
      if (err) {
        console.error('Proxy error:', err);
      }
    });
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
