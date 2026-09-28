// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { add, fullName } = await import(target);

// Spy on console.log to make sure the functions print nothing
function capturingLogs(fn) {
  const original = console.log;
  const printed = [];
  console.log = (...args) => printed.push(args.join(' '));
  try {
    return { value: fn(), printed };
  } finally {
    console.log = original;
  }
}

test('add returns the sum and prints nothing', () => {
  const { value, printed } = capturingLogs(() => add(2, 3));
  assert.equal(value, 5);
  assert.deepEqual(printed, []);
});

test('fullName returns the name and prints nothing', () => {
  const { value, printed } = capturingLogs(() => fullName('Ama', 'Mensah'));
  assert.equal(value, 'Ama Mensah');
  assert.deepEqual(printed, []);
});
