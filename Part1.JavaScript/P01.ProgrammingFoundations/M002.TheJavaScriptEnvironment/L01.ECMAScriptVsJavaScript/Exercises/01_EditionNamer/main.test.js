// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { editionName, editionFromYear } = await import(target);

test('early editions', () => {
  assert.equal(editionName(1), 'ES1 (1997)');
  assert.equal(editionName(2), 'ES2 (1998)');
  assert.equal(editionName(3), 'ES3 (1999)');
  assert.equal(editionName(5), 'ES5 (2009)');
});

test('ES4 was abandoned', () => {
  assert.throws(() => editionName(4), /abandoned/);
});

test('yearly editions', () => {
  assert.equal(editionName(6), 'ES2015 (ES6)');
  assert.equal(editionName(11), 'ES2020 (ES11)');
  assert.equal(editionName(16), 'ES2025 (ES16)');
});

test('invalid edition numbers', () => {
  for (const bad of [0, -1, 2.5, NaN, '6']) assert.throws(() => editionName(bad), RangeError, String(bad));
});

test('editionFromYear', () => {
  assert.equal(editionFromYear(1997), 1);
  assert.equal(editionFromYear(1999), 3);
  assert.equal(editionFromYear(2009), 5);
  assert.equal(editionFromYear(2015), 6);
  assert.equal(editionFromYear(2025), 16);
});

test('years without an edition', () => {
  for (const y of [1990, 2003, 2008, 2012]) assert.equal(editionFromYear(y), null, String(y));
});
