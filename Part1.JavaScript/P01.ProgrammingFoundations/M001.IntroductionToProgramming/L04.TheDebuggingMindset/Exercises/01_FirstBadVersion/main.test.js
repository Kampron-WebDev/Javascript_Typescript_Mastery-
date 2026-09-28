// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { firstBadVersion } = await import(target);

// A "spy": a fake isBad that counts how often it is called.
function spyIsBad(firstBad) {
  const spy = (v) => {
    spy.calls++;
    return v >= firstBad;
  };
  spy.calls = 0;
  return spy;
}

function check(n, firstBad) {
  const isBad = spyIsBad(firstBad);
  assert.equal(firstBadVersion(n, isBad), firstBad, `n=${n}, first bad=${firstBad}`);
  const limit = Math.ceil(Math.log2(n)) + 1;
  assert.ok(isBad.calls <= limit, `n=${n}: used ${isBad.calls} calls, limit is ${limit}`);
}

test('small cases', () => {
  check(7, 4);
  check(1, 1);
  check(2, 1);
  check(2, 2);
});

test('first and last version', () => {
  check(100, 1);
  check(100, 100);
});

test('every position in a small range', () => {
  for (let bad = 1; bad <= 50; bad++) check(50, bad);
});

test('a million versions, in about 20 calls', () => {
  check(1_000_000, 777_777);
});
