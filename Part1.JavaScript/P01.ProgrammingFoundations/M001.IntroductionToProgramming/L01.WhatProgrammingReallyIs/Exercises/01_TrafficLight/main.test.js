// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { nextLight, runLights } = await import(target);

test('each light moves to the next', () => {
  assert.equal(nextLight('green'), 'yellow');
  assert.equal(nextLight('yellow'), 'red');
  assert.equal(nextLight('red'), 'green');
});

test('unknown lights throw', () => {
  assert.throws(() => nextLight('blue'), /Unknown light: blue/);
  assert.throws(() => nextLight('GREEN'), /Unknown light/);
});

test('runLights includes the start', () => {
  assert.deepEqual(runLights('green', 0), ['green']);
  assert.deepEqual(runLights('red', 1), ['red', 'green']);
});

test('runLights over several cycles', () => {
  assert.deepEqual(runLights('green', 4), ['green', 'yellow', 'red', 'green', 'yellow']);
  assert.equal(runLights('yellow', 30).length, 31);
});
