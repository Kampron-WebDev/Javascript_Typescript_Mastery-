// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { measure } = await import(target);

test('returns the result and passes arguments through', () => {
  const { result, ms } = measure(Math.max, 3, 9, 4);
  assert.equal(result, 9);
  assert.equal(typeof ms, 'number');
  assert.ok(ms >= 0);
});

test('measures roughly the right duration', () => {
  const busy = (msToWait) => {
    const until = performance.now() + msToWait;
    while (performance.now() < until);
    return 'done';
  };
  const { result, ms } = measure(busy, 30);
  assert.equal(result, 'done');
  assert.ok(ms >= 29, `expected about 30 ms, got ${ms}`);
  assert.ok(ms < 500, `expected about 30 ms, got ${ms}`);
});

test('errors propagate', () => {
  assert.throws(
    () =>
      measure(() => {
        throw new RangeError('boom');
      }),
    RangeError,
  );
});
