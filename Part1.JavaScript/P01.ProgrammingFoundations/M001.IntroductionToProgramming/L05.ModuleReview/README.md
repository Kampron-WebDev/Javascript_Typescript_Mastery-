# Lesson 05: Module 001 Review

[🏠 Course](../../../../README.md) · [Module 001](../README.md) · [⬅ Previous](../L04.TheDebuggingMindset/README.md) · Next: [Module 002 ➡](../../M002.TheJavaScriptEnvironment/README.md)

**Module 001 · Review** · ⏱️ about 2 hours

Four parts: **recall** the module as one picture, **quiz** yourself with no notes, do the **no-hints challenge**, then check the **mastery gate**.

---

## 1 · The module in one picture

Close this page and draw it from memory in MY-NOTES.md first. Then compare.

```text
          PROGRAM = values + state + algorithm
                         │
     INPUT ──► PROCESS (expressions inside statements) ──► OUTPUT
                         │
       source text ─► PARSE ─► COMPILE ─► EXECUTE
                        │                   │
                  syntax errors      runtime errors      (logic errors: only tests find them)
                        │                   │
                        └──── DEBUG: reproduce → observe → hypothesise → experiment → fix → verify
```

## 2 · Quiz (no notes, 25 minutes, 15 points)

1. Program vs algorithm vs source code?
2. What is state? Why does it make testing harder?
3. Draw the three-state traffic-light machine.
4. Expression or statement? `a = b` · `while (x) {}` · `f()` · `const k = 1` · `x ? 1 : 2`
5. Why is `const y = if (a) 1 else 2;` invalid?
6. What does `(x) => { x + 1 }` return, and why?
7. How do you return an object literal from a one-line arrow function?
8. A file has a syntax error on its last line. Does line 1 run?
9. Name the error type: `undefined.x` · `notDeclared` · `new Array(-5)` · `JSON.parse('{')`
10. Can the engine detect logic errors? Who can?
11. What does `node --check` do?
12. The six debugging steps, in order.
13. In a stack trace, which frame is where the error happened?
14. How many bisect steps for 4,000 commits?
15. Why is "wrap it in try/catch and move on" usually a bad fix?

<details><summary>✅ Answers (check only after writing yours)</summary>

1. An algorithm is the precise *idea* (the steps). A program is that idea implemented in a language. Source code is the program's *text*.
2. State is data remembered between steps. Tests must set up the "before" situation, and the same call can behave differently.
3. green → yellow → red → green.
4. Expression · statement · expression · statement · expression.
5. `if` is a statement, but the right side of `=` needs an expression. Use a ternary.
6. `undefined`. The braces make a block body, and nothing is `return`ed.
7. Wrap it in parentheses: `() => ({ a: 1 })`.
8. No. The whole file is parsed first, and parsing fails.
9. TypeError · ReferenceError · RangeError · SyntaxError (at runtime).
10. No. Tests (and users) find logic errors.
11. It parses a file and reports syntax errors without running it.
12. Reproduce → observe → hypothesise → experiment → fix → verify.
13. The top frame.
14. 12 (2¹² = 4,096).
15. It hides the symptom, keeps the cause, and lets the program continue in a broken state.

</details>

**Score:** ___ / 15.

## 3 · No-hints challenge: Robot Commands

[Robot Commands](Exercises/01_RobotCommands/README.md) combines state, input → output, precise rules and errors. No hints this time.

## 4 · Explain it back (Feynman)

Record yourself (phone voice memo is fine) explaining each in **under 60 seconds** to an imaginary 12-year-old. Listen back: where you hesitated is where to revisit.

1. What is a program, and what is state?
2. Expression vs statement.
3. Why doesn't line 1 run when there's a syntax error on line 200?
4. How would you hunt down a bug you've never seen before?

## 5 · Mastery gate

Open the [Module 001 README](../README.md#-mastery-gate) and tick the gate honestly, then record it in [PROGRESS.md](../../../../PROGRESS.md).

- ✅ **All ticked, and the quiz ≥ 11/15?** Commit and start [Module 002](../../M002.TheJavaScriptEnvironment/README.md).
- 🔁 **Not yet?** Redo the exercises of your weakest lesson **from scratch** (delete your `main.js` and start over), then retake the quiz in two days.
