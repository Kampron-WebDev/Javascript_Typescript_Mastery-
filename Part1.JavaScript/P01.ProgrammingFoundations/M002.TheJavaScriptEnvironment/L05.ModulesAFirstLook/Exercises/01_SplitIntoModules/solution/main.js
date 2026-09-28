import createCart, { addItem, cartTotal } from './cart.js';
import { formatMoney } from './money.js';

export function checkout(items) {
  let cart = createCart();
  for (const item of items) cart = addItem(cart, item);
  return formatMoney(cartTotal(cart));
}
