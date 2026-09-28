// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { priceLabel } = await import(target);

test('adds 20% tax and formats', () => {
  assert.equal(priceLabel(1000), '$12.00');
  assert.equal(priceLabel(250), '$3.00');
  assert.equal(priceLabel(0), '$0.00');
});
