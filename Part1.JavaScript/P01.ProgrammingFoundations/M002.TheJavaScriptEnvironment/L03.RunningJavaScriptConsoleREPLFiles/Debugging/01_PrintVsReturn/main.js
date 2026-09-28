// ⚠️ 2 bugs. "It printed the right answer!" is not the same as "it works".

/** add(2, 3) → 5 */
export function add(a, b) {
  console.log(a + b);
}

/** fullName('Ama', 'Mensah') → 'Ama Mensah' */
export function fullName(first, last) {
  return console.log(`${first} ${last}`);
}
