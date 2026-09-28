export function receiptTotal(items) {
  let total = 0;
  for (const item of items) {
    const line = item.price * item.quantity;
    // Bug 2 (RUNTIME): `totl` was a typo. `totl += line` must first READ totl, and reading
    // a name that was never declared throws ReferenceError: totl is not defined, but only
    // when this line actually runs. (With an empty receipt the loop never runs, so it hid there!)
    total += line;
  }
  return total;
} // Bug 1 (PARSE): this closing brace was missing. `node --check` reported
//   "SyntaxError: Unexpected end of input", so nothing in the file could run.
