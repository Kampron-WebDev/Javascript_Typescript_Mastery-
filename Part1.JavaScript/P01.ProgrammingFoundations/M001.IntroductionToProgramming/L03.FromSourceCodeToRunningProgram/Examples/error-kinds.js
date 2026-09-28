// One of each common runtime error, caught so the program keeps going.
// Run me:  node error-kinds.js   (predict each error's NAME first)

function attempt(description, fn) {
  try {
    fn();
    console.log(`✅ ${description}: no error`);
  } catch (err) {
    console.log(`💥 ${description}\n     ${err.name}: ${err.message}`);
  }
}

attempt('Using a name that was never declared', () => undeclaredThing + 1);
attempt('Reading a property of undefined', () => {
  const user = undefined;
  return user.name;
});
attempt('Calling something that is not a function', () => {
  const notAFunction = 42;
  notAFunction();
});
attempt('Changing a const', () => {
  const PI = 3.14;
  PI = 3; // parses fine; fails only when it RUNS
});
attempt('A negative array length', () => new Array(-1));
attempt('Parsing bad JSON (a SyntaxError… at RUNTIME)', () => JSON.parse('{oops'));
attempt('Parsing bad code from a string', () => new Function('let = ;'));
attempt('A logic error', () => {
  const price = 100;
  const withTax = price - price * 0.2; // meant +, but nothing complains!
  return withTax;
});

console.log('\nNotice the last one: logic errors never throw. Only tests catch them.');
