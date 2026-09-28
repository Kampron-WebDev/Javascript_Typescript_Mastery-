// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { evaluate } = await import(target);

const num = (value) => ({ type: 'number', value });
const bin = (operator, left, right) => ({ type: 'binary', operator, left, right });

test('a single number', () => {
  assert.equal(evaluate(num(7)), 7);
});

test('one operation of each kind', () => {
  assert.equal(evaluate(bin('+', num(2), num(3))), 5);
  assert.equal(evaluate(bin('-', num(10), num(4))), 6);
  assert.equal(evaluate(bin('*', num(3), num(4))), 12);
  assert.equal(evaluate(bin('/', num(12), num(4))), 3);
});

test('2 + 3 * 4 (the tree decides the order)', () => {
  assert.equal(evaluate(bin('+', num(2), bin('*', num(3), num(4)))), 14);
});

test('(1 + 2) * (3 - 4)', () => {
  assert.equal(evaluate(bin('*', bin('+', num(1), num(2)), bin('-', num(3), num(4)))), -3);
});

test('errors', () => {
  assert.throws(() => evaluate(bin('/', num(1), num(0))), RangeError);
  assert.throws(() => evaluate(bin('%', num(1), num(2))), Error);
  assert.throws(() => evaluate({ type: 'banana' }), Error);
});
