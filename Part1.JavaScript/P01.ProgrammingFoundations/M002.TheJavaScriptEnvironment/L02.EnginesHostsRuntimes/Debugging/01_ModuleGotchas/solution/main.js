// Bug 1: `require` is a CommonJS function that Node passes into CommonJS files.
// ES modules don't get it; they use the `import` syntax instead.
import path from 'node:path';

export function dataFile(name) {
  // Bug 2: `__dirname` is ALSO a CommonJS-only variable. ES modules expose
  // information about themselves on `import.meta` instead.
  return path.join(import.meta.dirname, 'data', name);
}
