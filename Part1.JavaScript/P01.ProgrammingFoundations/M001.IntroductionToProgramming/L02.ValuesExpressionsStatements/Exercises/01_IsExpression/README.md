# Exercise 01: Is It an Expression?

**Goal:** sharpen your eye for expressions vs statements, using the JavaScript **parser itself** as the referee.

## Step 1: Predict (in MY-NOTES.md, before coding!)

For each snippet, write **E** (a valid expression) or **N** (not an expression):

```text
1 + 2              let x = 1          x = 5              a ? b : c
if (a) b           () => 1            for (;;) {}        'hi'.length
{}                 ({})               return 1           typeof x
```

## Step 2: Build the referee

Complete `isExpression(code)`: return `true` if `code` is a valid JavaScript expression, `false` otherwise.

**The trick:** `new Function(body)` asks the engine to *parse* `body` as the inside of a function. It throws a `SyntaxError` if the code is invalid, and it does **not run** the code. So:

```js
new Function('return (' + code + ');')
```

parses successfully **only if** `code` is an expression (only expressions may appear inside `return ( … )`).

- Wrap it in `try` / `catch`: parsed fine → `true`; `SyntaxError` → `false`.
- An empty or whitespace-only string is **not** an expression → `false`.

```js
isExpression('1 + 2')       // → true
isExpression('let x = 1')   // → false
isExpression('x = 5')       // → true   (!)
isExpression('')            // → false
```

## Step 3: Compare

Run the tests. Which of your predictions were wrong? Explain each surprise in MY-NOTES.md. (`{}` vs `({})` is the famous one.)

```powershell
node --test
```

⚠️ `new Function` and `eval` run code from strings. That's fine for learning tools like this one, but **never** use them on user input in real apps. That's a major security hole.
