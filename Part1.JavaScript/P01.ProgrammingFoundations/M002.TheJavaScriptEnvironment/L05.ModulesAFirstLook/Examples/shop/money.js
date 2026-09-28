// money.js: everything about money. Only what's exported leaves this "room".

const SYMBOL = '$'; // private: not exported, so invisible to other modules

export function formatMoney(cents) {
  return `${SYMBOL}${(cents / 100).toFixed(2)}`;
}

export default function toCents(dollars) {
  return Math.round(dollars * 100);
}
