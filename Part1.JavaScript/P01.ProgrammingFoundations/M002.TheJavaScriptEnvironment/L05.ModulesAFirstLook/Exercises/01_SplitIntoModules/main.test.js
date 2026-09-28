// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const base = process.env.CHECK_SOLUTION ? './solution/' : './';
const money = await import(`${base}money.js`);
const cartModule = await import(`${base}cart.js`);
const { checkout } = await import(`${base}main.js`);

test('money.js exports formatMoney', () => {
  assert.equal(money.formatMoney(1234), '$12.34');
  assert.equal(money.formatMoney(5), '$0.05');
  assert.equal(money.formatMoney(0), '$0.00');
  assert.equal(money.formatMoney(-500), '-$5.00');
});

test('cart.js has a default export that creates empty carts', () => {
  assert.equal(typeof cartModule.default, 'function');
  assert.deepEqual(cartModule.default(), { items: [] });
  assert.notEqual(cartModule.default(), cartModule.default(), 'each call makes a NEW cart');
});

test('addItem returns a new cart and leaves the old one alone', () => {
  const empty = cartModule.default();
  const pen = { name: 'Pen', price: 125, quantity: 4 };
  const withPen = cartModule.addItem(empty, pen);
  assert.deepEqual(withPen, { items: [pen] });
  assert.deepEqual(empty, { items: [] }, 'the original cart was modified!');
});

test('cartTotal sums price × quantity', () => {
  const cart = { items: [{ price: 125, quantity: 4 }, { price: 999, quantity: 1 }] };
  assert.equal(cartModule.cartTotal(cart), 1499);
  assert.equal(cartModule.cartTotal({ items: [] }), 0);
});

test('main.js checkout works end to end', () => {
  assert.equal(
    checkout([
      { name: 'Pen', price: 125, quantity: 4 },
      { name: 'Book', price: 999, quantity: 1 },
    ]),
    '$14.99',
  );
  assert.equal(checkout([]), '$0.00');
});
