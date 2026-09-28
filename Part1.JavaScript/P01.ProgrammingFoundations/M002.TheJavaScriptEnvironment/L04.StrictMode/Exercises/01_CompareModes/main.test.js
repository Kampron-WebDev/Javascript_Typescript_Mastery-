// Run with:  node --test
// Predict every result in MY-NOTES.md BEFORE running!
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { compareModes } = await import(target);

const cases = [
  ['return 1 + 1', 'ok', 'ok'],
  // (the sloppy run creates a global, so the snippet deletes it again to leave no trace)
  ['__compareModesLeak = 5; delete globalThis.__compareModesLeak;', 'ok', 'ReferenceError'],
  ['var o = Object.freeze({ a: 1 }); o.a = 2;', 'ok', 'TypeError'],
  ['delete Object.prototype;', 'ok', 'TypeError'],
  ['with (Math) { max(1, 2); }', 'ok', 'SyntaxError'],
  ['function f(a, a) {}', 'ok', 'SyntaxError'],
  ['return 010;', 'ok', 'SyntaxError'],
  ['var private = 1;', 'ok', 'SyntaxError'],
  ['var f = function () { return this; }; if (f() === undefined) throw new Error("no this");', 'ok', 'Error'],
  ['let = ;', 'SyntaxError', 'SyntaxError'],
  ['null.x', 'TypeError', 'TypeError'],
];

for (const [code, sloppy, strict] of cases) {
  test(code, () => {
    assert.deepEqual(compareModes(code), { sloppy, strict });
  });
}
