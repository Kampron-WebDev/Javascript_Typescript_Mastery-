// Run me AFTER your tests pass:  node report.js
import { inventory } from './main.js';

const NAMES = ['Array', 'Promise', 'JSON', 'console', 'setTimeout', 'fetch', 'structuredClone',
  'window', 'document', 'localStorage', 'process', 'Buffer', 'require', '__dirname'];

console.log('Inventory of the real Node.js global object:\n');
console.log(inventory(globalThis, NAMES));
console.log('\nWhy are require and __dirname "missing" even though they are Node names? (See Debugging 01.)');
