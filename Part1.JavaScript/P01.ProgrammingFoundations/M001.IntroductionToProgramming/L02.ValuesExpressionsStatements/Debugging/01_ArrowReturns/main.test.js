// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { double, makeUser } = await import(target);

test('double returns twice the number', () => {
  assert.equal(double(4), 8);
  assert.equal(double(-1.5), -3);
});

test('makeUser returns an object', () => {
  assert.deepEqual(makeUser('Ama'), { name: 'Ama', role: 'student' });
});
