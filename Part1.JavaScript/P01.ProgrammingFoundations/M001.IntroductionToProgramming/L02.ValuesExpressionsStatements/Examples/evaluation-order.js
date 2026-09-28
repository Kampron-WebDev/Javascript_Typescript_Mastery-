// Watch the engine evaluate an expression tree from the leaves up.
// Run me:  node evaluation-order.js   (predict the order of the logs first!)

function value(label, v) {
  console.log(`  evaluating ${label} → ${v}`);
  return v;
}

console.log('Expression: 2 + 3 * 4');
const result = value('2', 2) + value('3', 3) * value('4', 4);
console.log('result =', result, '\n');
// Operands are evaluated LEFT TO RIGHT (2, 3, 4)…
// …but the multiplication is APPLIED before the addition (the tree shape).

console.log('Expression: Math.max(a(), b(c()))');
const a = () => value('a()', 5);
const b = (x) => value(`b(${x})`, x * 10);
const c = () => value('c()', 1);
console.log('result =', Math.max(a(), b(c())));
// Arguments are evaluated before the call that uses them: inside out.
