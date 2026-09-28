// This top-level code runs ONCE, no matter how many modules import this file.
console.log('📦 counter.js is being evaluated');

let count = 0;
export function increment() {
  count++;
  return count;
}
