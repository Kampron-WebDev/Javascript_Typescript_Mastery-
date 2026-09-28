// cart.js: depends on money.js
import toCents from './money.js'; // the DEFAULT export, and we choose the local name

export function lineTotal(item) {
  return toCents(item.price) * item.quantity;
}

export function cartTotal(items) {
  return items.reduce((sum, item) => sum + lineTotal(item), 0);
}
