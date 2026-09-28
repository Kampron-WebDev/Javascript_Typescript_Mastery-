/**
 * insertCoin(credit, coin, price) → { credit, dispensed, change }
 * ⚠️ 2 bugs.
 */
export function insertCoin(credit, coin, price) {
  const total = credit + coin;

  if (total > price) {
    return { credit: 0, dispensed: true, change: total - price };
  } else if (total === price) {
    return { credit: 0, dispensed: true, change: 0 };
  }
  return { credit: total, dispensed: false, change: 0 };
}

// console.log(insertCoin(80, 50, 100));
