// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { runRobot } = await import(target);

test('no commands: stays at the default start', () => {
  assert.deepEqual(runRobot(''), { x: 0, y: 0, facing: 'N' });
});

test('forward and turning', () => {
  assert.deepEqual(runRobot('FFRFF'), { x: 2, y: 2, facing: 'E' });
  assert.deepEqual(runRobot('LLF'), { x: 0, y: -1, facing: 'S' });
  assert.deepEqual(runRobot('RRRR'), { x: 0, y: 0, facing: 'N' });
  assert.deepEqual(runRobot('LLLL'), { x: 0, y: 0, facing: 'N' });
});

test('backward keeps facing', () => {
  assert.deepEqual(runRobot('RBB'), { x: -2, y: 0, facing: 'E' });
});

test('custom start', () => {
  assert.deepEqual(runRobot('F', { x: 5, y: 5, facing: 'W' }), { x: 4, y: 5, facing: 'W' });
});

test('does not modify the start object', () => {
  const start = { x: 1, y: 1, facing: 'S' };
  runRobot('FFL', start);
  assert.deepEqual(start, { x: 1, y: 1, facing: 'S' });
});

test('unknown commands throw with their position', () => {
  assert.throws(() => runRobot('FX'), { name: 'SyntaxError', message: 'Unknown command "X" at position 1' });
  assert.throws(() => runRobot('F F'), { name: 'SyntaxError', message: 'Unknown command " " at position 1' });
  assert.throws(() => runRobot('f'), SyntaxError);
});
