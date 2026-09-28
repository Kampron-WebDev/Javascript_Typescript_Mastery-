/**
 * isExpression('1 + 2') → true;  isExpression('let x = 1') → false
 * Uses the engine's parser (new Function) as the referee. See README.md.
 */
export function isExpression(code) {
  // TODO 1: empty / whitespace-only → false
  // TODO 2: try to parse `return (<code>);` with new Function
  // TODO 3: parsed → true; SyntaxError → false
}
