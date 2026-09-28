// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { summarizeScores } = await import(target);

test('a typical class', () => {
  assert.deepEqual(summarizeScores([72, 50, 91, 38]), { count: 4, average: 62.8, highest: 91, passed: 3 });
});

test('the first score counts too', () => {
  assert.deepEqual(summarizeScores([99, 10]), { count: 2, average: 54.5, highest: 99, passed: 1 });
});

test('exactly 50 passes', () => {
  assert.equal(summarizeScores([50]).passed, 1);
});

test('no scores', () => {
  assert.deepEqual(summarizeScores([]), { count: 0, average: 0, highest: null, passed: 0 });
});
