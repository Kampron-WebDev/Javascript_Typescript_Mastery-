// main.js: the entry point.   Run me:  node main.js
import { cartTotal } from './cart.js';
import { formatMoney } from './money.js';
import * as money from './money.js'; // everything money.js exports, as one object

const items = [
  { name: 'Notebook', price: 3.5, quantity: 2 },
  { name: 'Pen', price: 1.25, quantity: 4 },
];

console.log('Total:', formatMoney(cartTotal(items)));
console.log('Everything money.js exports:', Object.keys(money)); // SYMBOL is not there: private!
console.log('Top-level `this` in a module:', this);               // undefined
