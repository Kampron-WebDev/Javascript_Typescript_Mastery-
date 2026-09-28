export function isExpression(code) {
  if (code.trim() === '') return false;
  try {
    // Only an expression may appear inside `return ( ... )`.
    // new Function PARSES the body but does not RUN it.
    new Function(`return (${code});`);
    return true;
  } catch (err) {
    if (err instanceof SyntaxError) return false;
    throw err; // anything else is unexpected, so don't hide it
  }
}

// The famous surprise: {} on its own line at the start of a STATEMENT is an empty
// BLOCK, but inside ( ) it can only be an object literal, which is an expression.
// That's why arrow functions returning objects need ({ ... }). See today's debugging!
