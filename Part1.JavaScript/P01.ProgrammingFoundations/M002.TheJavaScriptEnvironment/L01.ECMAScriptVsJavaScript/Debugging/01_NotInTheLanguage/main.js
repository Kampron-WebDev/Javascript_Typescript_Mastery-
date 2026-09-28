// ⚠️ 2 bugs: both methods are NOT part of ECMAScript.

/** lastItem(['a', 'b', 'c']) → 'c' */
export function lastItem(list) {
  return list.last();
}

/** flattenOnce([1, [2, 3], [4]]) → [1, 2, 3, 4] */
export function flattenOnce(nested) {
  return nested.flatten();
}
