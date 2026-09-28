// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { minimumEdition } = await import(target);

test('no features → ES5', () => {
  assert.equal(minimumEdition([]), 'ES5');
});

test('the latest year wins', () => {
  assert.equal(minimumEdition(['let', 'arrow functions']), 'ES2015');
  assert.equal(minimumEdition(['let', 'optional chaining']), 'ES2020');
  assert.equal(minimumEdition(['classes', 'object.groupby', 'let']), 'ES2024');
  assert.equal(minimumEdition(['set methods', 'let']), 'ES2025');
});

test('case-insensitive names and duplicates', () => {
  assert.equal(minimumEdition(['Optional Chaining', 'LET', 'let']), 'ES2020');
  assert.equal(minimumEdition(['Object.groupBy']), 'ES2024');
});

test('unknown features throw with their name', () => {
  assert.throws(() => minimumEdition(['teleport']), /Unknown feature.*teleport/);
  assert.throws(() => minimumEdition(['let', 'toString']), /Unknown feature.*toString/);
});
