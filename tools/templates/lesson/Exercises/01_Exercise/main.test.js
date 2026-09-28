// Run with:  node --test
// (Your code is in main.js. You don't need to edit this file.)
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { fn } = await import(target);

test('fn doubles a number', () => {
  assert.equal(fn(1), 2);
});
