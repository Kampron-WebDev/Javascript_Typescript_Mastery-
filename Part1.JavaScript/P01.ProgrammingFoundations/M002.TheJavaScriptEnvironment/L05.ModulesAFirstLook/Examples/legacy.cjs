// The OLD way: CommonJS. A .cjs file is always CommonJS.   Run me:  node legacy.cjs
// You'll still meet this in older Node code and tutorials, so learn to READ it.

const path = require('node:path'); // require() instead of import

console.log('require exists here:', typeof require);
console.log('__dirname exists here:', __dirname);
console.log('top-level this === module.exports:', this === module.exports); // true (checked BEFORE we replace it below)

function greet(name) {
  return `Hello, ${name}`;
}

module.exports = { greet }; // instead of `export`

console.log(greet('Kofi'), path.basename(__filename));
