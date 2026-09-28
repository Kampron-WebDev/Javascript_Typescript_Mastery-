// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { supportsSyntax, hasAPI } = await import(target);

test('modern syntax is supported', () => {
  assert.equal(supportsSyntax('return a ?? b'), true);
  assert.equal(supportsSyntax('return a?.b?.c'), true);
  assert.equal(supportsSyntax('class A { #x = 1; static y = 2 }'), true);
  assert.equal(supportsSyntax('let n = 1_000_000; n ??= 5'), true);
});

test('invalid syntax is not', () => {
  assert.equal(supportsSyntax('return a ?!? b'), false);
  assert.equal(supportsSyntax('class { }'), false);
  assert.equal(supportsSyntax('let let = 1'), false);
});

test('supportsSyntax never runs the code', () => {
  globalThis.__detectorRan = false;
  supportsSyntax('globalThis.__detectorRan = true');
  assert.equal(globalThis.__detectorRan, false);
});

test('APIs that exist', () => {
  assert.equal(hasAPI('Object.groupBy'), true);
  assert.equal(hasAPI('Array.prototype.toSorted'), true);
  assert.equal(hasAPI('Array.prototype.at'), true);
  assert.equal(hasAPI('structuredClone'), true);
});

test('APIs that do not exist, or are not functions', () => {
  assert.equal(hasAPI('Array.prototype.flatten'), false);
  assert.equal(hasAPI('Array.prototype.last'), false);
  assert.equal(hasAPI('Nope.nothing.here'), false);
  assert.equal(hasAPI('Math.PI'), false); // exists, but it's a number
});
