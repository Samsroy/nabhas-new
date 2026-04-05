const { spawn } = require('child_process');

console.log('Starting ng serve on port 4200...');
const ngServe = spawn('ng', ['serve', '--poll=2000', '--host=0.0.0.0'], {
  stdio: 'inherit',
  shell: true
});

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
