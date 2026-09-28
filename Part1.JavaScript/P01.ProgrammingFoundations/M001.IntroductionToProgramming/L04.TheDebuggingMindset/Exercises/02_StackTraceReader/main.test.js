// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { topFrame } = await import(target);

test('named function with a Windows path', () => {
  const stack = [
    "TypeError: Cannot read properties of undefined (reading 'name')",
    '    at customerLabel (C:\\app\\invoice.js:6:25)',
    '    at printInvoice (C:\\app\\invoice.js:10:23)',
  ].join('\n');
  assert.deepEqual(topFrame(stack), { fn: 'customerLabel', file: 'C:\\app\\invoice.js', line: 6, column: 25 });
});

test('anonymous frame with a Linux path', () => {
  const stack = 'ReferenceError: x is not defined\n    at /home/ama/app/main.js:14:1\n    at node:internal/main:1:1';
  assert.deepEqual(topFrame(stack), { fn: '<anonymous>', file: '/home/ama/app/main.js', line: 14, column: 1 });
});

test('file:// URL (ES modules)', () => {
  const stack = 'Error: boom\n    at load (file:///C:/Users/ama/app/config.js:3:9)';
  assert.deepEqual(topFrame(stack), { fn: 'load', file: 'file:///C:/Users/ama/app/config.js', line: 3, column: 9 });
});

test('method names with dots', () => {
  const stack = 'Error: nope\n    at Cart.addItem (/srv/shop/cart.js:42:11)';
  assert.deepEqual(topFrame(stack), { fn: 'Cart.addItem', file: '/srv/shop/cart.js', line: 42, column: 11 });
});

test('a REAL stack trace from this Node process', () => {
  function realFailure() {
    return new Error('real').stack;
  }
  const frame = topFrame(realFailure());
  assert.equal(frame.fn, 'realFailure');
  assert.match(frame.file, /main\.test\.js$/);
  assert.equal(typeof frame.line, 'number');
  assert.equal(typeof frame.column, 'number');
});

test('no frames → null', () => {
  assert.equal(topFrame('Error: just a message'), null);
});
