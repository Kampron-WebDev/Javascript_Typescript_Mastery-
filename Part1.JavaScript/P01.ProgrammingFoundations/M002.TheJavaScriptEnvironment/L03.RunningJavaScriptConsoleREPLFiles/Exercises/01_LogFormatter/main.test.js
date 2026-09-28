// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { formatLog } = await import(target);

const d = new Date('2026-09-26T10:00:00Z');

test('each level is uppercase and padded to 5', () => {
  assert.equal(formatLog('debug', 'x', d), '[2026-09-26T10:00:00.000Z] DEBUG x');
  assert.equal(formatLog('info', 'started', d), '[2026-09-26T10:00:00.000Z] INFO  started');
  assert.equal(formatLog('warn', 'disk almost full', d), '[2026-09-26T10:00:00.000Z] WARN  disk almost full');
  assert.equal(formatLog('error', 'db down', d), '[2026-09-26T10:00:00.000Z] ERROR db down');
});

test('level capitalisation does not matter', () => {
  assert.equal(formatLog('ERROR', 'db down', d), '[2026-09-26T10:00:00.000Z] ERROR db down');
  assert.equal(formatLog('Info', 'ok', d), '[2026-09-26T10:00:00.000Z] INFO  ok');
});

test('unknown levels throw', () => {
  assert.throws(() => formatLog('loud', 'hi', d), /Unknown level/);
});

test('defaults to the current time', () => {
  const line = formatLog('info', 'now');
  assert.match(line, /^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\] INFO  now$/);
});
