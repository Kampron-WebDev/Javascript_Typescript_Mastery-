// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { providerOf } = await import(target);

const EXPECTED = {
  language: ['Array', 'Object', 'String', 'Number', 'Promise', 'Map', 'Set', 'JSON', 'Math', 'Symbol', 'BigInt', 'globalThis', 'parseInt'],
  'shared-host': ['console', 'setTimeout', 'setInterval', 'fetch', 'URL', 'TextEncoder', 'structuredClone', 'queueMicrotask'],
  browser: ['window', 'document', 'localStorage', 'alert', 'HTMLElement'],
  node: ['process', 'Buffer', 'global', 'require', '__dirname'],
};

for (const [category, names] of Object.entries(EXPECTED)) {
  test(`${category} names`, () => {
    for (const name of names) assert.equal(providerOf(name), category, name);
  });
}

test('unknown and case-sensitive', () => {
  assert.equal(providerOf('banana'), 'unknown');
  assert.equal(providerOf('array'), 'unknown');
  assert.equal(providerOf('Console'), 'unknown');
  assert.equal(providerOf('toString'), 'unknown'); // a sneaky one: don't let object built-ins leak in!
});
