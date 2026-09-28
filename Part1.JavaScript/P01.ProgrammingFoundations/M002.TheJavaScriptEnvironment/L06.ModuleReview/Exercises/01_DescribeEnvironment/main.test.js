// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { describeEnvironment } = await import(target);

const fetch = () => {};

test('the real Node global', () => {
  assert.deepEqual(describeEnvironment(), {
    host: 'node',
    version: process.versions.node,
    hasDOM: false,
    hasFetch: true,
  });
});

test('a fake browser', () => {
  const g = { window: {}, document: { createElement() {} }, fetch };
  assert.deepEqual(describeEnvironment(g), { host: 'browser', version: null, hasDOM: true, hasFetch: true });
});

test('Deno imitates Node, and must still be detected as Deno', () => {
  const g = { Deno: { version: { deno: '2.5.0' } }, process: { versions: { node: '24.0.0' } }, fetch };
  assert.deepEqual(describeEnvironment(g), { host: 'deno', version: '2.5.0', hasDOM: false, hasFetch: true });
});

test('Bun imitates Node, and must still be detected as Bun', () => {
  const g = { Bun: { version: '1.3.0' }, process: { versions: { node: '24.3.0' } }, fetch };
  assert.deepEqual(describeEnvironment(g), { host: 'bun', version: '1.3.0', hasDOM: false, hasFetch: true });
});

test('an empty global never crashes', () => {
  assert.deepEqual(describeEnvironment({}), { host: 'unknown', version: null, hasDOM: false, hasFetch: false });
});

test('half a browser is not a browser', () => {
  assert.equal(describeEnvironment({ window: {} }).host, 'unknown');
  assert.equal(describeEnvironment({ document: {} }).hasDOM, false);
});
