export function causeReferenceError() {
  // eslint-disable-next-line no-undef
  return notDefinedAnywhere; // the name exists nowhere → ReferenceError
}

export function causeTypeError() {
  const nothing = undefined;
  return nothing.length; // undefined has no properties → TypeError
  // also: (5)(), or assigning to a const
}

export function causeRangeError() {
  return new Array(-1); // an array can't have a negative length → RangeError
  // also: (1).toFixed(101)
}

export function causeRuntimeSyntaxError() {
  return JSON.parse('{ this is not json'); // parsed at RUNTIME → SyntaxError
  // also: new RegExp('('), new Function('let = ;')
}
