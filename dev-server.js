const { spawn, exec } = require('node:child_process');
const http = require('node:http');

const port = 8080;
const url = `http://localhost:${port}/`;
const server = spawn('py', ['-m', 'http.server', String(port)], {
  stdio: 'inherit',
  windowsHide: false
});

let opened = false;
let attempts = 0;

function openBrowserWhenReady() {
  const request = http.get(url, (response) => {
    response.resume();
    if (opened) return;
    opened = true;
    console.log(`Website ready at ${url}`);
    exec(`start "" "${url}"`);
  });

  request.on('error', () => {
    attempts += 1;
    if (attempts >= 50) {
      console.error(`Could not connect to ${url}`);
      server.kill();
      process.exitCode = 1;
      return;
    }
    setTimeout(openBrowserWhenReady, 100);
  });
}

server.on('error', (error) => {
  console.error(`Could not start the development server: ${error.message}`);
  process.exitCode = 1;
});

server.on('exit', (code) => {
  if (code && !opened) process.exitCode = code;
});

process.on('SIGINT', () => {
  server.kill();
});

openBrowserWhenReady();
