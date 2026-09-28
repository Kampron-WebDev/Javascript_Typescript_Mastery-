// Run with:  node --test
// (Your code is in main.js. You don't need to edit this file.)
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { courseName, languagesInOrder } = await import(target);

test('course name', () => {
  assert.equal(courseName(), 'JavaScript & TypeScript Mastery');
});

test('JavaScript comes first', () => {
  assert.deepEqual(languagesInOrder(), ['JavaScript', 'TypeScript']);
});
