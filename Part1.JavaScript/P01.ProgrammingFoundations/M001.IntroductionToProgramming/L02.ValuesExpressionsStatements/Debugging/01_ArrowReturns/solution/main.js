// Bug 1: `{ x * 2; }` is a BLOCK containing an expression statement. The value is
// computed and thrown away, and a block body without `return` gives undefined.
// Fix: use the expression-body form.
export const double = (x) => x * 2;

// Bug 2: `{ name: name; }` is a BLOCK containing a LABEL called `name`, not an object!
// Fix: wrap the object in parentheses so it can only be read as an expression.
export const makeUser = (name) => ({ name, role: 'student' });
