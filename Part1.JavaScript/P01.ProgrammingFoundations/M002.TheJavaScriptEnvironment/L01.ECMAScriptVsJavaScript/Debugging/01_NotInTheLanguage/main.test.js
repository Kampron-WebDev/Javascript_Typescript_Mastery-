// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { lastItem, flattenOnce } = await import(target);

test('lastItem', () => {
  assert.equal(lastItem(['a', 'b', 'c']), 'c');
  assert.equal(lastItem([42]), 42);
  assert.equal(lastItem([]), undefined);
});

test('flattenOnce flattens exactly one level', () => {
  assert.deepEqual(flattenOnce([1, [2, 3], [4]]), [1, 2, 3, 4]);
  assert.deepEqual(flattenOnce([1, [2, [3]]]), [1, 2, [3]]);
});
