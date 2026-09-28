// STATE: same call, different results.   Run me:  node state.js
// Predict the output BEFORE running!

// No state: the output depends only on the input
function add(a, b) {
  return a + b;
}

// State: `visits` lives OUTSIDE the function and survives between calls
let visits = 0;
function greetVisitor(name) {
  visits = visits + 1;
  return `Welcome ${name}, you are visitor number ${visits}`;
}

console.log(add(2, 3));
console.log(add(2, 3));             // always the same

console.log(greetVisitor('Ama'));
console.log(greetVisitor('Ama'));   // same input… different output!
console.log(greetVisitor('Kofi'));

// Question for MY-NOTES.md: which of these two functions is easier to test, and why?
