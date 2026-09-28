// Bug 1 (linking): format.js has a NAMED export, not a default one, so import it by name.
import { formatPrice } from './format.js';
// Bug 2 (construction): Node ESM needs the full file name. './tax' → './tax.js'.
import { addTax } from './tax.js';

export function priceLabel(cents) {
  return formatPrice(addTax(cents));
}
