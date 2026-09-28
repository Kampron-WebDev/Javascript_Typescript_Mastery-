const TAX_RATE = 0.15;

export function invoiceSummary(lines) {
  let subtotal = 0;
  for (const line of lines) {
    subtotal += line.price * line.quantity;
  }
  // Bug 2 (RUNTIME, strict mode): `taxAmount` was never declared → ReferenceError.
  // In sloppy mode it would silently have become a global variable.
  const taxAmount = Math.round(subtotal * TAX_RATE);
  // Bug 3 (LOGIC): tax is ADDED to the subtotal, not subtracted. No engine can catch this; only tests can.
  const total = subtotal + taxAmount;
  // Bug 1 (PARSE): a missing comma after `subtotal`, so nothing in the file could run.
  return { subtotal, tax: taxAmount, total };
}
