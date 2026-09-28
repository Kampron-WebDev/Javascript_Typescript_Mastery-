// The facts live in ONE place; both functions read from it.
const EARLY_YEARS = { 1: 1997, 2: 1998, 3: 1999, 5: 2009 };
const FIRST_YEARLY = 6; // ES2015
const yearOf = (n) => (n >= FIRST_YEARLY ? 2009 + n : EARLY_YEARS[n]);

export function editionName(n) {
  if (!Number.isInteger(n) || n < 1) throw new RangeError(`Not an edition number: ${n}`);
  if (n === 4) throw new Error('ES4 was abandoned in 2008 and never published');
  return n >= FIRST_YEARLY ? `ES${yearOf(n)} (ES${n})` : `ES${n} (${yearOf(n)})`;
}

export function editionFromYear(year) {
  if (year >= 2015) return year - 2009;
  for (const [n, y] of Object.entries(EARLY_YEARS)) {
    if (y === year) return Number(n);
  }
  return null;
}
