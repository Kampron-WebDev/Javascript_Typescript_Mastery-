// This .js file is an ES MODULE (the course package.json says "type": "module"),
// so it is ALWAYS strict. Same mistakes as sloppy-vs-strict.cjs, very different results.
// Run me:  node strict-module.js

function attempt(label, fn) {
  try {
    console.log(`${label} →`, fn());
  } catch (err) {
    console.log(`${label} → 💥 ${err.name}: ${err.message}`);
  }
}

attempt('typo creates a global?', () => {
  let sum = 0;
  for (const p of [1, 2, 3]) summ = sum + p; // typo: summ
  return sum;
});

attempt('write to a frozen object', () => {
  const config = Object.freeze({ retries: 3 });
  config.retries = 10;
  return config.retries;
});

attempt('this in a plain call', () => {
  function whoAmI() {
    return this;
  }
  return whoAmI();
});

attempt('delete Object.prototype', () => delete Object.prototype);

console.log('\nEvery silent mistake became a loud, precise error. That is the point of strict mode.');
