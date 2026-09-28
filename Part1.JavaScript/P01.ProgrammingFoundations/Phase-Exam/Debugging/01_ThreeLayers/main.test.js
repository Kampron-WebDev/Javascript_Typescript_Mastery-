// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { invoiceSummary } = await import(target);

test('a typical invoice', () => {
  assert.deepEqual(invoiceSummary([{ price: 1000, quantity: 2 }, { price: 500, quantity: 1 }]), {
    subtotal: 2500,
    tax: 375,
    total: 2875,
  });
});

test('rounding the tax', () => {
  assert.deepEqual(invoiceSummary([{ price: 333, quantity: 1 }]), { subtotal: 333, tax: 50, total: 383 });
});

test('an empty invoice', () => {
  assert.deepEqual(invoiceSummary([]), { subtotal: 0, tax: 0, total: 0 });
});
