/**
 * Evaluates an expression tree made of
 *   { type: 'number', value }
 *   { type: 'binary', operator: '+' | '-' | '*' | '/', left, right }
 */
export function evaluate(node) {
  if (node.type === "number") {
    return node.value;
  }

  if (node.type === "binary") {
    const leftValue = evaluate(node.left);
    const rightValue = evaluate(node.right);
    switch (node.operator) {
      case "+":
        return leftValue + rightValue;
      case "-":
        return leftValue - rightValue;
      case "*":
        return leftValue * rightValue;
      case "/":
        if (rightValue === 0) {
          throw new RangeError("Division by zero");
        }
        return leftValue / rightValue;
      default:
        throw new Error(`Unknown operator: ${node.operator}`);
    }
  }
  throw new Error(`Unknown node type: ${node.type}`);
}
