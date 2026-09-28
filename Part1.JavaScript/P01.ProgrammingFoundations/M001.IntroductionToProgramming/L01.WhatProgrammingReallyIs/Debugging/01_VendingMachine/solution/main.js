export function insertCoin(credit, coin, price) {
  const total = credit + coin;

  // Bug 1: "enough money" means AT LEAST the price, so >=, not >.
  if (total >= price) {
    // Bug 2: change is what you paid MINUS the price (total - price), not the reverse.
    return { credit: 0, dispensed: true, change: total - price };
  }
  return { credit: total, dispensed: false, change: 0 };
}
