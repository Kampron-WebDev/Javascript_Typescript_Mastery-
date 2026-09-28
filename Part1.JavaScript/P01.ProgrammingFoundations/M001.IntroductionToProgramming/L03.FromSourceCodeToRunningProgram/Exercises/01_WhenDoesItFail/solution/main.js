export function whenDoesItFail(code) {
  let fn;
  try {
    fn = new Function(code); // PARSE only: nothing runs yet
  } catch (err) {
    if (err instanceof SyntaxError) return 'parse';
    throw err;
  }

  try {
    fn(); // RUN
  } catch {
    return 'runtime'; // whatever its name, it happened while running
  }
  return 'ok';
}
