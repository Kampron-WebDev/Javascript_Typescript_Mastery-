export function evaluate(node) {
  if (node.type === 'number') return node.value;

  if (node.type === 'binary') {
    // Leaves first: evaluate both subtrees, then combine (inside out).
    const left = evaluate(node.left);
    const right = evaluate(node.right);
    switch (node.operator) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      case '*':
        return left * right;
      case '/':
        if (right === 0) throw new RangeError('Division by zero');
        return left / right;
      default:
        throw new Error(`Unknown operator: ${node.operator}`);
    }
  }

  throw new Error(`Unknown node type: ${node.type}`);
}
