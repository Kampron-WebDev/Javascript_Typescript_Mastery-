// ✅ Correct. Don't change this file.
export const TAX_RATE = 0.2;

export function addTax(cents) {
  return Math.round(cents * (1 + TAX_RATE));
}
