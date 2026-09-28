export function supportsSyntax(snippet) {
  try {
    new Function(snippet); // parse only
    return true;
  } catch (err) {
    if (err instanceof SyntaxError) return false;
    throw err;
  }
}

export function hasAPI(path) {
  let value = globalThis;
  for (const part of path.split('.')) {
    value = value?.[part]; // ?. stops safely at the first missing piece
  }
  return typeof value === 'function';
}

// Think-about-it: an API check is ordinary code (a property lookup), so it can run and
// then decide. A syntax check must be done on a STRING, or in a separate file, because
// if the engine can't parse `??`, it rejects the entire file before any check runs.
