// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { inventory } = await import(target);

const EMPTY = { language: [], 'shared-host': [], browser: [], node: [], unknown: [], missing: [] };

test('groups present names and lists missing ones', () => {
  const fake = { Array, console, process: {} };
  assert.deepEqual(inventory(fake, ['Array', 'console', 'process', 'document']), {
    ...EMPTY,
    language: ['Array'],
    'shared-host': ['console'],
    node: ['process'],
    missing: ['document'],
  });
});

test('a fake browser global', () => {
  const fakeBrowser = { window: {}, document: {}, fetch() {}, JSON };
  assert.deepEqual(inventory(fakeBrowser, ['JSON', 'fetch', 'window', 'document', 'process']), {
    ...EMPTY,
    language: ['JSON'],
    'shared-host': ['fetch'],
    browser: ['window', 'document'],
    missing: ['process'],
  });
});

test('unknown names that exist', () => {
  assert.deepEqual(inventory({ myThing: 1 }, ['myThing']), { ...EMPTY, unknown: ['myThing'] });
});

test('no names → all empty', () => {
  assert.deepEqual(inventory(globalThis, []), EMPTY);
});

test('the real Node global has no browser APIs', () => {
  const result = inventory(globalThis, ['window', 'document', 'process', 'fetch']);
  assert.deepEqual(result.browser, []);
  assert.deepEqual(result.node, ['process']);
});
