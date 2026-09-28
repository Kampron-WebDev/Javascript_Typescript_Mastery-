// Bug 1: printing SHOWS a value to a human; `return` GIVES it to the caller.
// A function without `return` gives its caller undefined.
export function add(a, b) {
  return a + b;
}

// Bug 2: console.log's own return value is undefined, so `return console.log(x)`
// prints x and then returns undefined.
export function fullName(first, last) {
  return `${first} ${last}`;
}
