# 🎓 Phase 01 Exam: Programming Foundations

[🏠 Course](../../../README.md) · [Phase 01](../README.md)

Take this only when the **Module 001 and 002 gates are both ticked**.
Total time: about **2.5 hours**. You may split it across two days, but finish each part in one sitting.

**Rules:** no notes, no lesson READMEs, no AI, no solutions. For the coding parts, you *may* use MDN (a professional is allowed documentation), but not tutorials or search results showing solutions.

Pass mark: **70% in each part.** Record your scores in [PROGRESS.md](../../../PROGRESS.md) (Phase exams table).

---

## Part 1 · Knowledge (40 minutes, 20 points)

Write your answers in `MY-EXAM.md` in this folder. Mark them afterwards with [ANSWER-KEY.md](ANSWER-KEY.md), **only after finishing all four parts**.

1. Define program, algorithm, state, input and output in one sentence each.
2. Give two examples each of an expression, a statement and an expression statement.
3. Why does `const x = if (a) 1 else 2;` fail, and what's the fix?
4. What does `(n) => { n * 2 }` return, and why?
5. Describe the three phases between source text and a finished run, and which error type belongs to each.
6. Why doesn't line 1 of a file run when line 90 has a syntax error?
7. Is a `SyntaxError` thrown by `JSON.parse` a parse-time error of your program? Explain.
8. List the six debugging steps.
9. In a stack trace, where do you look first, and why?
10. How many steps does binary search need for 100,000 items? Why?
11. ECMAScript vs JavaScript vs engine vs host.
12. Which stage number means "engines should start shipping"?
13. Syntax feature vs API feature: what breaks on an old engine, and what's the fix for each?
14. Classify: `Promise`, `console`, `document`, `process`, `Math`, `fetch`.
15. Why doesn't `require` work in an ES module? What replaces `__dirname`?
16. Print vs return: what does the caller receive from a function that only logs?
17. Four behaviours that strict mode changes.
18. Two ways code becomes strict without writing `'use strict'`.
19. Named vs default export: the syntax to export and import each.
20. Describe the three loading phases of ES modules, and one error each phase can throw.

## Part 2 · Coding (60 minutes, no hints)

Make the tests green: `node --test` inside each folder.

| # | Task | Points |
|---|---|---:|
| 1 | [Elevator Controller](Coding/01_ElevatorController/README.md): a pure state machine | 60 |
| 2 | [Minimum Edition](Coding/02_MinimumEdition/README.md): lookup, validation, maximum | 40 |

Score = percentage of tests passing, weighted as above.

## Part 3 · Debugging (30 minutes)

[Three Layers](Debugging/01_ThreeLayers/README.md): one bug from each layer you studied (parse, runtime, logic).
Scoring: each fixed bug = 25 points; a correct **written** explanation of each bug's phase and cause = another 25 points total (so a fix without an explanation isn't full marks).

## Part 4 · Design (30 minutes)

In `MY-EXAM.md`, write a **one-page guide for a new teammate**:

> *"How our JavaScript gets from your editor to running in a user's browser and on our Node server."*

Include:

- a diagram (ASCII is fine)
- where ECMAScript editions, engines, hosts, modules and strict mode fit in
- where each of the three kinds of error gets caught, and by which tool
- two things you'd warn them about ("gotchas")

Mark it with the rubric in [ANSWER-KEY.md](ANSWER-KEY.md).

---

**Passed all four?** 🎉 Phase 01 is complete. Update PROGRESS.md, commit, and move on to [Phase 02: JavaScript Fundamentals](../../P02.JavaScriptFundamentals/README.md) (tell Claude you're ready, and the Phase 02 lessons will be written for you).
**Not yet?** Revisit the lessons behind the questions you missed, wait two days, and retake only the failed part.
