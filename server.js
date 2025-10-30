const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { spawn } = require('child_process');

const app = express();
const PORT = 5000;

let expoProcess = null;

console.log('Starting Expo dev server...');

expoProcess = spawn('npx', ['expo', 'start', '--web', '--host', 'localhost', '--port', '8081'], {
  stdio: 'inherit',
  shell: true
});

expoProcess.on('error', (error) => {
  console.error('Failed to start Expo:', error);
});

expoProcess.on('exit', (code) => {
  console.log(`Expo process exited with code ${code}`);
});

setTimeout(() => {
  console.log(`Setting up proxy server on port ${PORT}...`);
  
  app.use('/', createProxyMiddleware({
    target: 'http://localhost:8081',
    changeOrigin: true,
    ws: true,
    logLevel: 'silent',
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader('Host', 'localhost:8081');
    },
  }));

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Proxy server running on http://0.0.0.0:${PORT}`);
    console.log(`Forwarding to Expo dev server on http://localhost:8081`);
  });
}, 5000);

process.on('SIGTERM', () => {
  if (expoProcess) {
    expoProcess.kill();
  }
  process.exit(0);
});

process.on('SIGINT', () => {
  if (expoProcess) {
    expoProcess.kill();
  }
  process.exit(0);
});
