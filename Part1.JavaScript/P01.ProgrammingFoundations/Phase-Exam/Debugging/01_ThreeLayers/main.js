// ⚠️ 3 bugs: one parse-time, one runtime, one logic.
const TAX_RATE = 0.15;

/** invoiceSummary(lines) → { subtotal, tax, total } in cents; tax = 15%, rounded. */
export function invoiceSummary(lines) {
  let subtotal = 0;
  for (const line of lines) {
    subtotal += line.price * line.quantity;
  }
  taxAmount = Math.round(subtotal * TAX_RATE);
  const total = subtotal - taxAmount;
  return { subtotal tax: taxAmount, total };
}
