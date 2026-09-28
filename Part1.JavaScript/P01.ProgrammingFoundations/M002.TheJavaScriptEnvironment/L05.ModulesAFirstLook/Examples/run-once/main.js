// Run me:  node main.js
// Predict: how many times does "counter.js is being evaluated" print?
//          What numbers do a.js and b.js print?
import './a.js';
import './b.js';

console.log('main.js runs last: dependencies are evaluated first.');
// Answer: counter.js runs ONCE. a and b share the SAME count, so they print 1 and then 2.
// A module is like a single shared object: that's why it can hold app-wide state.
