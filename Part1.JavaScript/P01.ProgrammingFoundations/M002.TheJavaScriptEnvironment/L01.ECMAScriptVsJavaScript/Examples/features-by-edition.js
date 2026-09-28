// A tour of ECMAScript editions.   Run me:  node features-by-edition.js

// ES5 (2009): array methods
console.log('ES5    map         :', [1, 2, 3].map(function (n) { return n * 2; }));

// ES2015 (ES6): let/const, arrows, template literals, classes, Map
const greet = (name) => `Hello ${name}`;
class Point { constructor(x, y) { this.x = x; this.y = y; } }
console.log('ES2015 arrows etc  :', greet('Ama'), new Point(1, 2), new Map([['k', 'v']]));

// ES2016: exponent operator
console.log('ES2016 2 ** 10     :', 2 ** 10);

// ES2019: flat
console.log('ES2019 flat        :', [1, [2, [3]]].flat());

// ES2020: nullish coalescing, optional chaining, BigInt
const settings = { theme: null };
console.log('ES2020 ?? and ?.   :', settings.theme ?? 'light', settings.user?.name, 2n ** 64n);

// ES2021: numeric separators, logical assignment
let retries;
retries ??= 3;
console.log('ES2021 1_000_000   :', 1_000_000, 'retries:', retries);

// ES2022: .at(), Object.hasOwn, #private fields
class Counter { #count = 0; inc() { return ++this.#count; } }
console.log('ES2022 at(-1)      :', ['a', 'b', 'c'].at(-1), Object.hasOwn({ x: 1 }, 'x'), new Counter().inc());

// ES2023: non-mutating sort
const original = [3, 1, 2];
console.log('ES2023 toSorted    :', original.toSorted(), 'original untouched:', original);

// ES2024: Object.groupBy
console.log('ES2024 groupBy     :', Object.groupBy([1, 2, 3, 4], (n) => (n % 2 ? 'odd' : 'even')));

// Newer APIs: check before using (feature DETECTION, not assumption)
const checks = {
  'Set.prototype.union (ES2025)': typeof Set.prototype.union === 'function',
  'Iterator.prototype.map (ES2025)': typeof globalThis.Iterator?.prototype?.map === 'function',
  'RegExp.escape (ES2025)': typeof RegExp.escape === 'function',
  'Promise.try (ES2025)': typeof Promise.try === 'function',
};
console.log('\nNewer APIs in your Node', process.version);
for (const [name, ok] of Object.entries(checks)) console.log(`  ${ok ? '✅' : '❌'} ${name}`);
