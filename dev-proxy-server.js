const http = require('http');
const httpProxy = require('http-proxy');
const { spawn } = require('child_process');

const proxy = httpProxy.createProxyServer({
  target: 'http://localhost:4201',
  changeOrigin: true,
  ws: true
});

// Start ng serve on port 4201
const ngServe = spawn('ng', ['serve', '--poll=2000', '--port=4201'], {
  stdio: 'inherit',
  shell: true
});

// Create proxy server on port 4200
const server = http.createServer((req, res) => {
  // Check if request is for a file
  if (req.url.match(/\.\w+(\?.*)?$/)) {
    // File request, proxy directly
    proxy.web(req, res);
  } else if (req.url.startsWith('/api/')) {
    // API request, proxy directly
    proxy.web(req, res);
  } else {
    // SPA route - rewrite to index.html and proxy
    const originalUrl = req.url;
    req.url = '/index.html';
    proxy.web(req, res, (err) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Proxy error');
      }
    });
    // Restore original URL for logging
    req.url = originalUrl;
  }
});

proxy.on('error', (err, req, res) => {
  console.error('Proxy error:', err);
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end('Internal Server Error');
});

server.listen(4200, () => {
  console.log('Development proxy server running on http://localhost:4200');
});

// Handle process termination
process.on('SIGTERM', () => {
  ngServe.kill();
  server.close();
  process.exit();
});
