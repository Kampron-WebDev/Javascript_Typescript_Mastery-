/**
 * isExpression('1 + 2') → true;  isExpression('let x = 1') → false
 * Uses the engine's parser (new Function) as the referee. See README.md.
 */
export function isExpression(code) {
  if (code.trim() === "") {
    return false;
  }
  try {
    new Function(`return (${code});`);
    return true;
  } catch (e) {
    if (e instanceof SyntaxError) {
      return false;
    }
    throw e;
  }
}
