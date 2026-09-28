// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { receiptTotal } = await import(target);

test('adds price × quantity for every item', () => {
  assert.equal(receiptTotal([{ price: 250, quantity: 2 }, { price: 100, quantity: 1 }]), 600);
});

test('an empty receipt is 0', () => {
  assert.equal(receiptTotal([]), 0);
});
