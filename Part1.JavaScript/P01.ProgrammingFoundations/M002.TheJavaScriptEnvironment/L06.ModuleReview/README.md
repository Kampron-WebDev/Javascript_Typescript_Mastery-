# Lesson 06: Module 002 Review

[🏠 Course](../../../../README.md) · [Module 002](../README.md) · [⬅ Previous](../L05.ModulesAFirstLook/README.md) · Next: [Phase 01 Exam ➡](../../Phase-Exam/README.md)

**Module 002 · Review** · ⏱️ about 2 hours

---

## 1 · The module in one picture

Draw it from memory in MY-NOTES.md first, then compare.

```text
  ECMAScript (TC39's yearly rulebook: syntax + built-ins like Array, Promise, Map)
        │ implemented by
        ▼
  ENGINE (V8 · SpiderMonkey · JavaScriptCore)
        │ embedded in
        ▼
  HOST  ── browser: document, window, localStorage
        ── Node:    process, Buffer, fs  (+ require/__dirname in CommonJS only)
        ── both:    console, setTimeout, fetch, URL …          = the RUNTIME
        │
  You talk to it via:  REPL · node file.js · node -e/-p · --watch · --check
        │
  Your file is:  an ES MODULE (own scope, always STRICT, imports/exports, runs once)
                 or a CommonJS/classic SCRIPT (sloppy unless 'use strict')
```

## 2 · Quiz (no notes, 25 minutes, 15 points)

1. ECMAScript vs JavaScript vs TC39.
2. Which edition was ES6's official name? What happened to ES4?
3. At which proposal stage do engines start shipping features?
4. New *syntax* vs new *API* on an old engine: what happens with each, and what fixes each?
5. Engine vs host vs runtime.
6. Which of these are ECMAScript: `Map`, `console`, `fetch`, `JSON`, `setTimeout`?
7. Why does `require` fail in this course's `.js` files?
8. What does `_` mean in the Node REPL?
9. `console.error` writes to which stream? Why does that matter?
10. What does a function that only `console.log`s its result return?
11. Name three things strict mode turns from silent into errors.
12. Are ES modules strict? Are `.cjs` files?
13. Named vs default exports: how do you import each?
14. Why does `import { x } from './utils'` fail in Node?
15. A module is imported by five others. How often does its top-level code run?

<details><summary>✅ Answers</summary>

1. ECMAScript is the standard; JavaScript is the language as implemented; TC39 is the committee that evolves the standard.
2. ES2015. ES4 was abandoned in 2008 and never published.
3. Stage 3.
4. Syntax: the whole file fails to parse (SyntaxError); fix with a transpiler. API: TypeError only when it's called; fix with a polyfill.
5. The engine executes ECMAScript; the host embeds it and adds APIs; the runtime is engine + APIs + event loop together.
6. `Map` and `JSON`. The others are host APIs.
7. The files are ES modules (`"type": "module"`); `require` only exists in CommonJS.
8. The value of the last expression evaluated.
9. stderr. Tools, logs and CI treat errors separately from normal output.
10. `undefined`.
11. Any three: assigning to undeclared variables, writing to read-only/frozen properties, deleting undeletable properties, duplicate parameter names, `with`, legacy octal literals.
12. ES modules: always. `.cjs`: no (sloppy unless `'use strict'`).
13. Named: `import { name } from '…'`. Default: `import anyName from '…'`.
14. Node ESM needs the full file name: `'./utils.js'`.
15. Once.

</details>

**Score:** ___ / 15.

## 3 · No-hints challenge: Describe the Environment

[Describe Environment](Exercises/01_DescribeEnvironment/README.md): detect which host you're running in, correctly, even when hosts imitate each other.

## 4 · Explain it back (Feynman)

Record 60-second explanations, as if to a 12-year-old:

1. Why is `console.log` not "JavaScript"?
2. How does a new feature get into JavaScript?
3. What does strict mode protect you from?
4. Why are modules better than one giant file?

## 5 · Mastery gate

Tick the [Module 002 gate](../README.md#-mastery-gate) honestly and record it in [PROGRESS.md](../../../../PROGRESS.md).

- ✅ **Both Module 001 and 002 gates ticked, quiz ≥ 11/15?** Take the **[Phase 01 Exam](../../Phase-Exam/README.md)**.
- 🔁 **Not yet?** Redo your weakest lesson's exercises from scratch, and retake the quiz in two days.
