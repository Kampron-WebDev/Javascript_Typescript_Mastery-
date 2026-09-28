/**
 * insertCoin(credit, coin, price) → { credit, dispensed, change }
 * ⚠️ 2 bugs.
 */
export function insertCoin(credit, coin, price) {
  const total = credit + coin;

  if (total > price) {
    return { credit: 0, dispensed: true, change: price - total };
  }
  return { credit: total, dispensed: false, change: 0 };
}
