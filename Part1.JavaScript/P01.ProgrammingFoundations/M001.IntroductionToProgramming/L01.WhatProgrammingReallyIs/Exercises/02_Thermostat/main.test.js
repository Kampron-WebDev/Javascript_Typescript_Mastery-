// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { decide } = await import(target);

test('too cold → heat', () => {
  assert.equal(decide(18, 21), 'heat');
  assert.equal(decide(20.4, 21), 'heat');
});

test('too hot → cool', () => {
  assert.equal(decide(25, 21), 'cool');
  assert.equal(decide(21.6, 21), 'cool');
});

test('within tolerance → idle, including the edges', () => {
  assert.equal(decide(21, 21), 'idle');
  assert.equal(decide(21.4, 21), 'idle');
  assert.equal(decide(20.5, 21), 'idle');
  assert.equal(decide(21.5, 21), 'idle');
});

test('custom tolerance', () => {
  assert.equal(decide(22, 21, 2), 'idle');
  assert.equal(decide(24, 21, 2), 'cool');
});

test('bad input throws TypeError', () => {
  assert.throws(() => decide('hot', 21), TypeError);
  assert.throws(() => decide(20, undefined), TypeError);
  assert.throws(() => decide(NaN, 21), TypeError);
});
