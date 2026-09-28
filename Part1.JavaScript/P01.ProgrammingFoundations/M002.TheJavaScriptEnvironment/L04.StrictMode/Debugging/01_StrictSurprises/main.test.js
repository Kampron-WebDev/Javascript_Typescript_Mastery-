// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { DEFAULTS, makeConfig, countRetries } = await import(target);

test('overrides are applied', () => {
  assert.deepEqual(makeConfig({ retries: 5 }), { retries: 5, timeoutMs: 1000 });
});

test('no overrides gives the defaults', () => {
  assert.deepEqual(makeConfig(), { retries: 3, timeoutMs: 1000 });
});

test('DEFAULTS is never modified and stays frozen', () => {
  makeConfig({ retries: 99, timeoutMs: 1 });
  assert.deepEqual(DEFAULTS, { retries: 3, timeoutMs: 1000 });
  assert.equal(Object.isFrozen(DEFAULTS), true);
});

test('countRetries', () => {
  assert.equal(countRetries(['retry 1', 'ok', 'retry 2']), 2);
  assert.equal(countRetries([]), 0);
});
