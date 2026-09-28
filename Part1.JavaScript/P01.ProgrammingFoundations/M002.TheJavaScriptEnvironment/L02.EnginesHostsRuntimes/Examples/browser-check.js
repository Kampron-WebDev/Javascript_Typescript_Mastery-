// Paste this into a BROWSER console (F12 → Console) and compare with `node globals.js`.
['Array', 'Promise', 'console', 'setTimeout', 'fetch', 'structuredClone',
 'process', 'Buffer', 'window', 'document', 'localStorage']
  .forEach((name) => console.log(name.padEnd(16), typeof globalThis[name] === 'undefined' ? '❌ missing' : '✅ present'));

console.log('setTimeout returns:', typeof setTimeout(() => {}, 0));   // 'number' in browsers
console.log('globalThis === window ?', globalThis === window);        // true in a browser page
