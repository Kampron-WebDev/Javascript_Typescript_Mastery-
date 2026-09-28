// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { dataFile } = await import(target);

// The folder that contains the main.js being tested
const moduleDir = path.dirname(fileURLToPath(new URL(target, import.meta.url)));

test('returns an absolute path inside data/ next to main.js', () => {
  const result = dataFile('students.json');
  assert.equal(path.isAbsolute(result), true);
  assert.equal(result, path.join(moduleDir, 'data', 'students.json'));
});
