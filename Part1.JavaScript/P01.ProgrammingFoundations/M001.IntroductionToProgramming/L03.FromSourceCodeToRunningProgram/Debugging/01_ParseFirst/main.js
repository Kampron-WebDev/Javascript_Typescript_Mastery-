// ⚠️ 2 bugs: one syntax error (parse time), one runtime error.

/** receiptTotal([{ price: 250, quantity: 2 }]) → 500 */
export function receiptTotal(items) {
  let total = 0;
  for (const item of items) {
    const line = item.price * item.quantity;
    totl += line;
  }
  return total;
