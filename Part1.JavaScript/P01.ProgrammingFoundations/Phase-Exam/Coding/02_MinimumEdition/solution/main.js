export const FEATURE_YEARS = {
  'let': 2015,
  'arrow functions': 2015,
  'classes': 2015,
  'template literals': 2015,
  'exponent operator': 2016,
  'async/await': 2017,
  'object spread': 2018,
  'array.flat': 2019,
  'optional chaining': 2020,
  'nullish coalescing': 2020,
  'bigint': 2020,
  'private fields': 2022,
  'top-level await': 2022,
  'array.at': 2022,
  'array.tosorted': 2023,
  'object.groupby': 2024,
  'set methods': 2025,
};

export function minimumEdition(features) {
  let latest = null;
  for (const feature of features) {
    const key = feature.toLowerCase();
    // Object.hasOwn: 'toString' must not sneak in through Object.prototype
    if (!Object.hasOwn(FEATURE_YEARS, key)) throw new Error(`Unknown feature: ${feature}`);
    latest = Math.max(latest ?? 0, FEATURE_YEARS[key]);
  }
  return latest === null ? 'ES5' : `ES${latest}`;
}
