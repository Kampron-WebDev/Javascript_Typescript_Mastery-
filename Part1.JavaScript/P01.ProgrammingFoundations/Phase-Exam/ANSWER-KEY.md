# 🔑 Phase 01 Exam: Answer Key

⚠️ Open this only **after** finishing all four parts.

## Part 1 · Knowledge (1 point each; half points allowed)

1. Program: instructions a computer executes. Algorithm: precise, finite steps that solve a problem. State: data remembered between steps. Input: data coming in. Output: data or effects going out.
2. Expressions: `a + 1`, `f(x)`. Statements: `let x = 1;`, `for (…) {}`. Expression statements: `f(x);`, `x = 5;`.
3. `if` is a statement and `=` needs an expression on the right. Use a ternary: `const x = a ? 1 : 2;`.
4. `undefined`. Braces make a block body, and there's no `return`.
5. Parse (syntax errors), compile/execute (runtime errors: TypeError, ReferenceError…), and logic errors, which the engine never detects (only tests do).
6. The whole file is parsed before anything runs; the parse fails, so nothing executes.
7. No. Your program parsed fine; `JSON.parse` parses a string at **runtime**. The name tells you *what* went wrong, the phase tells you *when*.
8. Reproduce → observe → hypothesise → experiment → fix → verify.
9. The error name + message, then the **top** stack frame: that's where the error was thrown.
10. About 17 (2¹⁷ = 131,072). Each step halves the remaining range.
11. ECMAScript = the standard; JavaScript = the implemented language; engine = executes it (V8…); host = embeds the engine and adds APIs (browser, Node).
12. Stage 3.
13. Syntax: the whole file fails to parse, so use a transpiler. API: a TypeError only when called, so use a polyfill.
14. Language: `Promise`, `Math`. Shared host: `console`, `fetch`. Browser: `document`. Node: `process`.
15. ES modules don't get the CommonJS helpers; use `import`, and `import.meta.dirname`.
16. `undefined`.
17. Any four: undeclared assignment throws; `this` is `undefined` in plain calls; writing to read-only properties throws; deleting undeletable properties throws; duplicate parameters, `with` and octal literals are SyntaxErrors.
18. ES modules; class bodies. (Also: `new Function('"use strict"; …')` counts if they mention it.)
19. `export function f` / `import { f } from './m.js'`; `export default function g` / `import anyName from './m.js'`.
20. Construction (missing file → ERR_MODULE_NOT_FOUND), linking (missing export → SyntaxError), evaluation (runtime errors from module code).

## Part 4 · Design rubric (100 points)

| Criterion | Points |
|---|---:|
| Correct, readable diagram from editor → browser and editor → Node | 20 |
| Editions / engines / hosts explained correctly and simply | 20 |
| Modules and strict mode placed correctly (and *why* they matter) | 15 |
| Each error kind matched to where/which tool catches it | 25 |
| Two genuinely useful gotchas (e.g. `require` in ESM, missing `.js` extension, `window` on the server, print vs return) | 10 |
| Written for a *new teammate*: clear, short, no jargon left unexplained | 10 |
