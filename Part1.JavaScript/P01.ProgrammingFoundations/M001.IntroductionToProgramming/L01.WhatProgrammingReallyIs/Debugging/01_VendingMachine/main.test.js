// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { insertCoin } = await import(target);

test('not enough money yet', () => {
  assert.deepEqual(insertCoin(0, 50, 100), { credit: 50, dispensed: false, change: 0 });
});

test('exact money dispenses', () => {
  assert.deepEqual(insertCoin(50, 50, 100), { credit: 0, dispensed: true, change: 0 });
});

test('too much money dispenses with positive change', () => {
  assert.deepEqual(insertCoin(80, 50, 100), { credit: 0, dispensed: true, change: 30 });
});
