// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { isExpression } = await import(target);

const EXPRESSIONS = ['1 + 2', 'x = 5', 'a ? b : c', '() => 1', "'hi'.length", '({})', '{}', 'typeof x', 'f(g(1))', '[1, 2, 3]'];
const NOT_EXPRESSIONS = ['let x = 1', 'if (a) b', 'for (;;) {}', 'return 1', 'const y = 2', 'while (true) {}'];

test('recognises expressions', () => {
  for (const code of EXPRESSIONS) assert.equal(isExpression(code), true, `"${code}" should be an expression`);
});

test('rejects statements', () => {
  for (const code of NOT_EXPRESSIONS) assert.equal(isExpression(code), false, `"${code}" is not an expression`);
});

test('empty input is not an expression', () => {
  assert.equal(isExpression(''), false);
  assert.equal(isExpression('   '), false);
});

test('never runs the code', () => {
  globalThis.__ran = false;
  isExpression('globalThis.__ran = true');
  assert.equal(globalThis.__ran, false);
});
