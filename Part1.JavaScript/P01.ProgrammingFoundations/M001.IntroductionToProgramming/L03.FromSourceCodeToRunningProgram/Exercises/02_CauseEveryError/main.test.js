// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const mod = await import(target);

// The error must be the engine's own: exactly that class, not a subclass you made up.
function assertThrowsExactly(fn, ErrorClass) {
  let caught;
  try {
    fn();
  } catch (err) {
    caught = err;
  }
  assert.ok(caught, `${fn.name} did not throw anything`);
  assert.equal(caught.constructor, ErrorClass, `${fn.name} threw ${caught.name}, expected ${ErrorClass.name}`);
}

test('ReferenceError', () => assertThrowsExactly(mod.causeReferenceError, ReferenceError));
test('TypeError', () => assertThrowsExactly(mod.causeTypeError, TypeError));
test('RangeError', () => assertThrowsExactly(mod.causeRangeError, RangeError));
test('SyntaxError at runtime', () => assertThrowsExactly(mod.causeRuntimeSyntaxError, SyntaxError));

test('no throw keyword was used', () => {
  const code = readFileSync(new URL(target, import.meta.url), 'utf8').replace(/\/\/.*$/gm, '');
  assert.doesNotMatch(code, /\bthrow\b/);
});
