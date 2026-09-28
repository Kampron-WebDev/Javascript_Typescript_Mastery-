// Who provides each global name?   Run me:  node globals.js

const check = (name) => (typeof globalThis[name] === 'undefined' ? '❌ missing' : `✅ ${typeof globalThis[name]}`);

const groups = {
  'ECMAScript (the language, same everywhere)': ['Array', 'Object', 'Promise', 'Map', 'JSON', 'Math', 'Symbol', 'globalThis'],
  'Shared host APIs (browsers AND Node)': ['console', 'setTimeout', 'fetch', 'URL', 'TextEncoder', 'structuredClone', 'queueMicrotask'],
  'Node only': ['process', 'Buffer', 'global'],
  'Browser only': ['window', 'document', 'localStorage', 'alert'],
};

for (const [group, names] of Object.entries(groups)) {
  console.log(`\n${group}`);
  for (const name of names) console.log(`  ${name.padEnd(16)} ${check(name)}`);
}

// Details differ even in "shared" APIs:
const id = setTimeout(() => {}, 0);
console.log('\nsetTimeout returns in Node:', typeof id, id.constructor.name, '(a browser returns a number)');
clearTimeout(id);

// In an ES module, CommonJS helpers don't exist:
console.log('typeof require   in an ES module:', typeof require);
console.log('typeof __dirname in an ES module:', typeof __dirname, '→ use import.meta.dirname:', import.meta.dirname);
