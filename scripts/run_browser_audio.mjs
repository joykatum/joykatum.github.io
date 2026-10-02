// Requires Chrome and a local static server: python3 -m http.server 8765.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'joykatum-browser-audio-'));
const executable = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browser = spawn(
  executable,
  [
    '--headless',
    '--disable-gpu',
    '--no-first-run',
    '--disable-background-networking',
    '--remote-debugging-port=0',
    `--user-data-dir=${profile}`,
    'about:blank'
  ],
  { stdio: 'ignore', detached: true }
);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let socket;
const pending = new Map();
let sequence = 0;
const logs = [];
const call = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const id = ++sequence;
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
try {
  const activePort = path.join(profile, 'DevToolsActivePort');
  for (let i = 0; !fs.existsSync(activePort) && i < 100; i++) await sleep(100);
  const port = fs.readFileSync(activePort, 'utf8').split('\n')[0];
  const targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  socket = new WebSocket(targets.find((t) => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    socket.onopen = resolve;
    socket.onerror = reject;
  });
  socket.onmessage = ({ data }) => {
    const message = JSON.parse(data);
    if (message.id && pending.has(message.id)) {
      const request = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) request.reject(new Error(message.error.message));
      else request.resolve(message.result);
    } else if (
      message.method === 'Runtime.exceptionThrown' ||
      message.method === 'Log.entryAdded' ||
      message.method === 'Runtime.consoleAPICalled'
    )
      logs.push(message.params);
  };
  await call('Runtime.enable');
  await call('Log.enable');
  fs.mkdirSync(new URL('../audits/', import.meta.url), { recursive: true });
  for (const kind of process.argv.slice(2).length
    ? process.argv.slice(2)
    : ['bell', 'membrane', 'tabla', 'sample', 'effects', 'catalogue']) {
    logs.length = 0;
    await call('Page.navigate', { url: `http://127.0.0.1:8765/scripts/audio-browser-check.html?case=${kind}` });
    let value = '';
    const deadline = Date.now() + 180000;
    while (Date.now() < deadline) {
      await sleep(250);
      const result = await call('Runtime.evaluate', {
        expression: "document.getElementById('result')?.textContent || ''",
        returnByValue: true
      });
      value = result.result?.value || '';
      if (value.startsWith('{')) break;
    }
    const result = value.startsWith('{') ? JSON.parse(value) : { status: 'TIMEOUT', case: kind, logs };
    result.browserErrors = logs.filter(
      (entry) => entry.type === 'error' || entry.entry?.level === 'error' || entry.exceptionDetails
    );
    fs.writeFileSync(
      new URL(`../audits/browser-${kind}.json`, import.meta.url),
      JSON.stringify(result, null, 2) + '\n'
    );
    const { results, ...summary } = result;
    console.log(JSON.stringify(summary));
  }
} finally {
  socket?.close();
  try {
    process.kill(-browser.pid, 'SIGTERM');
  } catch {}
  await sleep(1000);
  fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
}
