// Bug 1: there is no Array.prototype.last in ECMAScript. Some libraries and other
// languages have one, so it "feels" real. The ES2022 method is .at(), and it accepts
// negative indexes counting from the end.
export function lastItem(list) {
  return list.at(-1);
}

// Bug 2: `flatten` was the original proposal name, renamed to `flat` in 2018 because the
// MooTools library had already put its own flatten on Array.prototype ("smooshgate").
// Lesson: check MDN or the spec; memory and other languages are not the standard.
export function flattenOnce(nested) {
  return nested.flat(); // default depth is 1
}
