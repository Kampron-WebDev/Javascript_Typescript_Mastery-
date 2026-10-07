// Every console.log argument below is an EXPRESSION: it evaluates to a value.
// Run me:  node expressions.js   (predict each line first!)

const name = "Ama";
const age = 19;
let score = 70;

console.log(42); // a literal is the simplest expression
console.log(age + 1); // arithmetic
console.log(age >= 18); // comparison → boolean
console.log(name.toUpperCase()); // method call
console.log(`${name} is ${age}`); // template literal (contains expressions)
console.log(score > 50 ? "pass" : "fail"); // ternary: the "if" that IS an expression
console.log([1, 2, 3].length); // property access
console.log((score = 90)); // assignment is an expression! value 90
console.log(score); // …and it changed score (side effect)
console.log(typeof name); // typeof is an operator → expression

// These are STATEMENTS. They do things, but have no value you can use:
let total = 0; // declaration
if (score > 80) total += 10; // if-statement
for (let i = 0; i < 3; i++) total += i; // loop
console.log("total:", total);

// Uncomment to see the parser reject a statement where an expression is required:
// console.log(if (score > 50) { 'pass' });
