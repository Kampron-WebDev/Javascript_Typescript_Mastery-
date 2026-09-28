// ⚠️ This file is BROKEN ON PURPOSE.
// Predict: will the next line print before the error?
//   node broken-on-purpose.js
//   node --check broken-on-purpose.js

console.log('Line 7: hello! Did I print?');

function total(prices) {
  let sum = 0;
  for (const p of prices) sum += p;
  return sum;
}

console.log('Total:', total([1, 2, 3]));

// The grammar breaks here: an assignment with nothing on the right-hand side.
let broken = ;

// Answer: NOTHING prints. The whole file is parsed before line 7 runs,
// and parsing fails at the line above.
