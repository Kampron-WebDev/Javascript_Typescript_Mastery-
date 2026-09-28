// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { whenDoesItFail } = await import(target);

test('valid code that runs fine', () => {
  assert.equal(whenDoesItFail('return 1 + 1'), 'ok');
  assert.equal(whenDoesItFail('return [1, 2, 3].map(n => n * 2)'), 'ok');
  assert.equal(whenDoesItFail(''), 'ok');
});

test('grammar errors fail at parse time', () => {
  assert.equal(whenDoesItFail('let x = ;'), 'parse');
  assert.equal(whenDoesItFail('if (true) {'), 'parse');
  assert.equal(whenDoesItFail('return )'), 'parse');
});

test('impossible operations fail at run time', () => {
  assert.equal(whenDoesItFail('null.length'), 'runtime');
  assert.equal(whenDoesItFail('return undefinedVariable + 1'), 'runtime');
  assert.equal(whenDoesItFail('const a = 1; a = 2;'), 'runtime');
});

test('a SyntaxError thrown while running is still a RUNTIME failure', () => {
  assert.equal(whenDoesItFail('JSON.parse("{")'), 'runtime');
  assert.equal(whenDoesItFail('new Function("let = ;")'), 'runtime');
});
