// The console toolbox.   Run me:  node console-tour.js

const user = { name: 'Ama', roles: ['student'], address: { city: 'Accra', geo: { lat: 5.6, lng: -0.19 } } };
const total = 42;

console.log('plain log:', total);
console.log({ total });                                   // label + value
console.info('info goes to stdout, like log');
console.warn('⚠️ warn goes to stderr');
console.error('❌ error goes to stderr');

console.table([
  { name: 'Ama', score: 82 },
  { name: 'Kofi', score: 67 },
]);

console.log(user);                                        // deep objects may be cut short…
console.dir(user, { depth: null });                       // …dir with depth: null shows everything

console.time('loop');
let sum = 0;
for (let i = 0; i < 1_000_000; i++) sum += i;
console.timeEnd('loop');                                  // how long did it take?

for (const fruit of ['apple', 'pear', 'apple']) console.count(fruit);

console.assert(total === 42, 'this does NOT print (the condition is true)');
console.assert(total === 0, 'this DOES print, because the condition is false');

console.group('Checkout');
console.log('validating cart');
console.group('Payment');
console.log('charging card');
console.groupEnd();
console.groupEnd();

console.trace('how did we get here?');

// Try:  node console-tour.js 2> errors.txt
// Only stdout stays on screen; warn/error/trace went into errors.txt. Open it!
