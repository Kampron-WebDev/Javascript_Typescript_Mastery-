# Lesson 02: Values, Expressions & Statements

[🏠 Course](../../../../README.md) · [Module 001](../README.md) · [⬅ Previous](../L01.WhatProgrammingReallyIs/README.md) · [Next ➡](../L03.FromSourceCodeToRunningProgram/README.md)

**Module 001 · Lesson 02** · ⏱️ about 1.5–2 hours · Needs: Lesson 01

---

## 1. Concept

🧸 **Simple version: grammar**

| Code idea | Grammar idea | Examples |
|---|---|---|
| **Value** | A *thing* (a noun) | `42`, `'Ama'`, `true` |
| **Expression** | A *phrase that produces a thing*: ask "what is it?" and you get an answer | `2 + 3`, `age >= 18`, `name.toUpperCase()` |
| **Statement** | A *complete command* (a sentence) that **does** something | `let x = 5;`, `if (…) {…}`, `for (…) {…}`, `return x;` |

A simple test: **can you put it after `console.log(` … `)`?** If yes, it's an expression. `console.log(2 + 3)` works; `console.log(if (a) {})` does not.

🎓 **Precise version:**

- A **value** is a piece of data: one of JavaScript's primitive types (number, string, boolean, undefined, null, bigint, symbol) or an object.
- An **expression** is any piece of code that **evaluates to a value**.
- A **statement** is an instruction that performs an action. Statements don't produce a value you can use; they *contain* expressions.
- An **expression statement** is an expression used on its own as a statement, like `greet('Ama');` or `x = 5;`.

## 2. Why it exists

Knowing the difference explains a whole family of "why doesn't this work?" moments:

- Why `const grade = if (score > 50) 'pass' else 'fail';` is a **syntax error**, while `const grade = score > 50 ? 'pass' : 'fail';` works. `if` is a statement; the ternary `? :` is an expression.
- Why `${ … }` in a template string accepts `a + b` but not a `for` loop.
- Why an arrow function with `{ }` needs `return`, but one without braces doesn't (today's debugging challenge).
- Later, in React: `{ … }` in JSX only accepts expressions. This rule never goes away.

## 3. Internal mechanics: expressions are trees

The engine doesn't read `2 + 3 * 4` left to right like a person. It builds a **tree** and evaluates from the **leaves up**:

```text
        (+)                 step 1: 3 * 4  → 12
       /   \                step 2: 2 + 12 → 14
     2      (*)
           /   \
          3     4
```

Every expression, however long, is a tree like this. Function calls are nodes too: in `Math.max(a, b + 1)`, the arguments are evaluated first (inside out), then the call happens.

**Some expressions also *do* things** (side effects):

```js
x = 5          // an EXPRESSION: its value is 5… and it also changes x
count++        // value is the OLD count… and it changes count
greet('Ama')   // value is whatever greet returns… and it may print
```

That's why `let a = b = 5` works (and is confusing): `b = 5` is an expression whose value is `5`.

**The REPL shows the difference.** Type `node` in a terminal:

```text
> 2 + 3
5                 ← an expression: the REPL shows its value
> let z = 3
undefined         ← a statement: there's no value to show
> z = 10
10                ← assignment is an expression!
```

## 4. Simple examples

```powershell
cd Examples
node expressions.js        # many expressions and their values
node evaluation-order.js   # watch the engine evaluate a tree, inside out
```

Then open the REPL (`node`) and try each line from section 3 yourself. (`Ctrl+C` twice to leave.)

## 5. Real-world examples

```js
// Template literal in an email (only expressions allowed inside ${ })
const email = `Hi ${user.firstName}, you have ${cart.length} item${cart.length === 1 ? '' : 's'} waiting.`;

// React (Year 1 of Full-Stack): JSX braces accept expressions only, so no if-statements
return <p>{isLoggedIn ? `Welcome back, ${name}` : 'Please sign in'}</p>;

// Configuration computed from expressions
const timeoutMs = (process.env.TIMEOUT_SECONDS ?? 30) * 1000;
```

## 6. Coding exercises

| # | Exercise | Skill |
|---|---|---|
| 1 | [Is It an Expression?](Exercises/01_IsExpression/README.md) | Using the engine's own parser as a referee (predict first!) |
| 2 | [Expression Tree Evaluator](Exercises/02_ExpressionTree/README.md) | Evaluating a tree inside out, like the engine does |

## 7. Debugging challenge

[Arrow Returns](Debugging/01_ArrowReturns/README.md): **2 bugs**, both caused by a statement sneaking in where an expression was intended.

## 8. Design question

> You're building an email-template system. Users write templates like `Hello {{ name }}, your order #{{ order.id }} has shipped.`

In MY-NOTES.md:

1. Should `{{ … }}` allow any **expression**? Only simple **property paths** like `order.id`? Or even **statements**?
2. What could go wrong if users could write any JavaScript there? (Think security and infinite loops.)
3. Which option would you choose, and what do you give up?

## 9. Short assessment

Label each as **E** (expression) or **S** (statement):
`42` · `let a = 1;` · `a * 2` · `if (a) {}` · `a = 7` · `'hi'.length` · `return a;` · `a > 1 ? 'x' : 'y'` · `for (;;) {}` · `Math.max(1, 2)`

Then:

1. What is the value of the expression `x = 5`?
2. Why does `const y = if (ok) 1 else 2;` fail?
3. In what order are these evaluated: `f(g(1), h(2))`?

<details><summary>Answers</summary>

E, S, E, S, E, E, S, E, S, E.

1. `5` (and, as a side effect, `x` becomes 5).
2. `if` is a statement, and the right side of `=` must be an expression. Use a ternary: `const y = ok ? 1 : 2;`.
3. `g(1)`, then `h(2)` (arguments left to right), then `f(…)` with their results: inside out.

</details>

## 10. Reflection

In MY-NOTES.md:

- Explain expression vs statement to a 10-year-old (grammar is a good hint).
- Find one line of code you've written before (C++ counts!) that mixes both.
- What is still fuzzy?

## 🔑 Key words

| Word | Meaning |
|---|---|
| Value | A piece of data |
| Expression | Code that evaluates to a value |
| Statement | Code that performs an action |
| Expression statement | An expression used as a statement (`f();`) |
| Side effect | A change an expression makes besides producing its value |
| Evaluate | Compute an expression's value |
| REPL | Read–Eval–Print Loop: an interactive prompt (`node`) |

## ✅ Done when

- [ ] I predicted, then ran, both examples and tried the REPL lines
- [ ] Both exercises are green (and I wrote my predictions first)
- [ ] Both arrow bugs fixed and explained
- [ ] Design question, quiz and reflection in MY-NOTES.md
- [ ] Committed
