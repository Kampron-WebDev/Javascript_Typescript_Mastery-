// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { elevator } = await import(target);

const idleAt = (floor) => ({ floor, status: 'idle', target: null });
const run = (start, events) => events.reduce(elevator, start);

test('call to the current floor opens the doors', () => {
  assert.deepEqual(elevator(idleAt(3), { type: 'call', floor: 3 }), { floor: 3, status: 'doors-open', target: null });
});

test('the full journey up', () => {
  const s = run(idleAt(0), [{ type: 'call', floor: 2 }, { type: 'tick' }, { type: 'tick' }, { type: 'close' }]);
  assert.deepEqual(s, idleAt(2));
});

test('moving down one floor per tick', () => {
  let s = elevator(idleAt(5), { type: 'call', floor: 2 });
  s = elevator(s, { type: 'tick' });
  assert.deepEqual(s, { floor: 4, status: 'moving', target: 2 });
  s = run(s, [{ type: 'tick' }, { type: 'tick' }]);
  assert.deepEqual(s, { floor: 2, status: 'doors-open', target: null });
});

test('calls are ignored while moving or with doors open', () => {
  const moving = { floor: 1, status: 'moving', target: 4 };
  assert.deepEqual(elevator(moving, { type: 'call', floor: 0 }), moving);
  const open = { floor: 1, status: 'doors-open', target: null };
  assert.deepEqual(elevator(open, { type: 'call', floor: 3 }), open);
});

test('ticks and closes do nothing in the wrong status', () => {
  assert.deepEqual(elevator(idleAt(1), { type: 'tick' }), idleAt(1));
  assert.deepEqual(elevator(idleAt(1), { type: 'close' }), idleAt(1));
  const moving = { floor: 1, status: 'moving', target: 4 };
  assert.deepEqual(elevator(moving, { type: 'close' }), moving);
});

test('never moving with doors open, over a long random run', () => {
  let s = idleAt(0);
  const events = [];
  for (let i = 0; i < 500; i++) {
    const r = (i * 7919) % 10;
    events.push(r < 3 ? { type: 'call', floor: r * 2 } : r < 8 ? { type: 'tick' } : { type: 'close' });
  }
  for (const e of events) {
    s = elevator(s, e);
    assert.ok(['idle', 'moving', 'doors-open'].includes(s.status));
    if (s.status !== 'moving') assert.equal(s.target, null);
  }
});

test('the input state is never modified', () => {
  const s = idleAt(0);
  const frozen = Object.freeze({ ...s });
  assert.doesNotThrow(() => elevator(frozen, { type: 'call', floor: 3 }));
  const m = Object.freeze({ floor: 0, status: 'moving', target: 3 });
  assert.doesNotThrow(() => elevator(m, { type: 'tick' }));
});

test('unknown events throw', () => {
  assert.throws(() => elevator(idleAt(0), { type: 'dance' }), /Unknown event/);
});
