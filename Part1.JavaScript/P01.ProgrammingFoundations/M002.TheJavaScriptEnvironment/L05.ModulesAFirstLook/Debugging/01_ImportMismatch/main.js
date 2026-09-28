// ⚠️ 2 bugs, both in the import lines.
import formatPrice from './format.js';
import { addTax } from './tax';

/** priceLabel(1000) → '$12.00' (20% tax added) */
export function priceLabel(cents) {
  return formatPrice(addTax(cents));
}
