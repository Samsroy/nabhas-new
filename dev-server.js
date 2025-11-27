const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 4200;

// Start ng build --watch in the background
const buildProcess = spawn('ng', ['build', '--watch', '--configuration', 'development'], {
  stdio: 'inherit',
  shell: true
});

// Wait a moment for the build to start
setTimeout(() => {
  // Serve the built files
  app.use(express.static(path.join(__dirname, 'dist/fusion-angular-tailwind-starter')));

  // SPA routing fallback - serve index.html for all non-file routes
  app.get('*', (req, res) => {
    // Check if the request is for a file (has an extension)
    if (path.extname(req.path) === '') {
      res.sendFile(path.join(__dirname, 'dist/fusion-angular-tailwind-starter/index.html'));
    } else {
      res.status(404).send('Not Found');
    }
  });

  app.listen(PORT, () => {
    console.log(`Development server running at http://localhost:${PORT}`);
  });
}, 2000);

// Handle process termination
process.on('SIGTERM', () => {
  buildProcess.kill();
  process.exit();
});
