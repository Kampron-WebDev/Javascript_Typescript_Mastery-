// ⚠️ 2 bugs: this was copied from an old CommonJS tutorial into an ES module.
const path = require('node:path');

/** Absolute path of a file in the "data" folder next to this file. */
export function dataFile(name) {
  return path.join(__dirname, 'data', name);
}
