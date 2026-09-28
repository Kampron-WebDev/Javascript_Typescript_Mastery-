// Data table: don't change it.
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

/** minimumEdition(['let', 'optional chaining']) → 'ES2020'. See README.md. */
export function minimumEdition(features) {
  // Exam: no hints.
}
