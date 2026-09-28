// A .cjs file is a CommonJS SCRIPT, so it runs in SLOPPY mode (no 'use strict' here).
// Run me:  node sloppy-vs-strict.cjs     then compare with:  node strict-module.js

function total(prices) {
  let sum = 0;
  for (const p of prices) summ = sum + p; // typo: summ
  return sum;
}
console.log('total([1, 2, 3]) =', total([1, 2, 3]), '← wrong, and no error!');
console.log('a global "summ" was created:', globalThis.summ);

const config = Object.freeze({ retries: 3 });
config.retries = 10;
console.log('frozen config.retries =', config.retries, '← the assignment was silently ignored');

function whoAmI() {
  return this === globalThis ? 'the global object' : this;
}
console.log('this in a plain call =', whoAmI());

console.log('delete Object.prototype →', delete Object.prototype, '← silently refused');
