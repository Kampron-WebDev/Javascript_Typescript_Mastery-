# Lesson 01: ECMAScript vs JavaScript

[🏠 Course](../../../../README.md) · [Module 002](../README.md) · [Next ➡](../L02.EnginesHostsRuntimes/README.md)

**Module 002 · Lesson 01** · ⏱️ about 1.5 hours · Needs: Module 001

---

## 1. Concept

🧸 **Simple version:**
Think of **football**. There's an official **rulebook** (written by a committee), and there are thousands of real **matches** played in stadiums around the world. The rulebook doesn't play football, and a match that ignores the rulebook isn't really football.

- **ECMAScript** is the rulebook: the official language specification.
- **JavaScript** is the language people actually use: ECMAScript, as implemented by engines in browsers and Node.js.
- **TC39** is the rules committee.

🎓 **Precise version:**

- **ECMAScript** is the language standard **ECMA-262**, published by Ecma International. It defines syntax, types, operators, built-in objects (`Array`, `Promise`, `Map`, …) and exactly how every operation behaves.
- **JavaScript** is the common name for implementations of ECMAScript (and a trademark, which is why the standard needed a different name).
- **TC39** (Technical Committee 39) evolves the standard. Browser makers, companies and invited experts all take part.
- A new edition is published **every year** (ES2015, ES2016, … ES2025, …).

## 2. Why it exists

In 1995 Brendan Eich created JavaScript at Netscape, famously in about ten days. Microsoft soon shipped its own slightly different copy. Web pages worked in one browser and broke in another.
A **standard** was the fix: one rulebook every engine must follow. The first edition of ECMAScript came in **1997**. Today, code written to the standard runs the same in Chrome, Firefox, Safari and Node.js.

## 3. Internal mechanics: how the language grows

### The editions

| Edition | Year | Headline features |
|---|---|---|
| ES1–ES3 | 1997–1999 | The original language, regular expressions, try/catch |
| ES4 | ❌ abandoned (2008) | Too big a change; the committee couldn't agree |
| ES5 | 2009 | Strict mode, JSON, `forEach` / `map` / `filter` |
| **ES2015 (ES6)** | 2015 | The big one: `let`/`const`, arrows, classes, modules, promises, template literals, `Map`/`Set` |
| ES2016 → today | yearly | Small, steady additions |

Some yearly highlights you'll use constantly:

| Year | Examples |
|---|---|
| ES2017 | `async` / `await` |
| ES2018 | Object spread `{ ...obj }` |
| ES2019 | `flat()`, `Object.fromEntries` |
| ES2020 | `??`, `?.`, `BigInt`, `globalThis`, dynamic `import()` |
| ES2021 | `??=`, `replaceAll`, numeric separators `1_000_000` |
| ES2022 | Class fields and `#private`, top-level `await`, `.at()`, `Object.hasOwn` |
| ES2023 | `toSorted()`, `toReversed()`, `with()`, `findLast()` |
| ES2024 | `Object.groupBy`, `Promise.withResolvers` |
| ES2025 | `Set` methods (`union`, `intersection`…), iterator helpers, `RegExp.escape`, `Promise.try` |

Since ES2015, editions are named by **year**. The edition *number* still exists: ES2015 is the 6th edition, so edition *n* (for n ≥ 6) is ES(2009 + n).

### How a feature gets in: the TC39 stages

```text
Stage 0  An idea
Stage 1  A proposal: the committee agrees the problem is worth solving
Stage 2  A draft: the solution's shape is chosen
Stage 2.7 The spec text is approved; tests are being written
Stage 3  Recommended for implementation: engines start shipping it
Stage 4  Finished: two engines ship it, and it goes into the next yearly edition
```

Proposals change and sometimes die. In 2018, `Array.prototype.flatten` had to be **renamed** `flat` because an old library (MooTools) had already added its own `flatten`, and the new one would have broken existing websites (the "smooshgate" story). The web's first rule is **don't break the web**. That's today's debugging challenge.

### Syntax vs API: an important difference

| New… | Example | Old engine sees… | Fix for old engines |
|---|---|---|---|
| **Syntax** | `a ?? b`, `class { #x }` | A **SyntaxError**: the whole file fails to parse | A **transpiler** (Babel, TypeScript) rewrites the code into older syntax |
| **API** | `Object.groupBy`, `arr.toSorted()` | A missing function, so a TypeError only when it's called | A **polyfill** adds the missing function |

## 4. Simple examples

```powershell
cd Examples
node features-by-edition.js   # one feature per edition, plus which newer APIs your Node has
```

Open **[the spec](https://tc39.es/ecma262/)** and search for `Array.prototype.at`. Don't worry about understanding it all; notice that *every* step is written down. By the end of Part I you'll read these comfortably.

## 5. Real-world examples

- **Compatibility tables** (MDN's "Browser compatibility" section at the bottom of every page) tell you where a feature works.
- **Build tools** use a *target* setting, e.g. TypeScript's `"target": "ES2022"`, to decide which syntax to rewrite.
- **Node.js versions** map to V8 versions, which decide which ECMAScript features you get. That's why this course needs Node 24+.

## 6. Coding exercises

| # | Exercise | Skill |
|---|---|---|
| 1 | [Edition Namer](Exercises/01_EditionNamer/README.md) | Editions, years and the ES4 gap |
| 2 | [Feature Detector](Exercises/02_FeatureDetector/README.md) | Detecting **syntax** support vs **API** support |

## 7. Debugging challenge

[Not in the Language](Debugging/01_NotInTheLanguage/README.md): **2 bugs** from methods people *assume* exist.

## 8. Design question

> Your app must still work in browsers from **2019**. A teammate wants to use `a ?? b` (ES2020 syntax) and `Object.groupBy` (ES2024 API).

In MY-NOTES.md:

1. What exactly happens in a 2019 browser for each one, if you ship the code unchanged?
2. Which needs a transpiler, and which a polyfill? Why is the answer different?
3. What's a third option (hint: who are the users; can you raise the minimum)?

## 9. Short assessment

1. ECMAScript vs JavaScript, in one sentence.
2. Who is TC39?
3. What's the name of the 6th edition, and of the 16th?
4. At which stage do engines usually start shipping a feature?
5. Why was `flatten` renamed `flat`?
6. Syntax feature vs API feature: which one breaks an old engine's *whole file*?

<details><summary>Answers</summary>

1. ECMAScript is the standard (the rulebook); JavaScript is the language as implemented by engines following it.
2. The Ecma committee that evolves the ECMAScript standard.
3. ES2015 (ES6); ES2025 (ES16).
4. Stage 3.
5. Adding `Array.prototype.flatten` would have broken existing websites that used the MooTools library, which defined its own `flatten`. The rule is: don't break the web.
6. Syntax. An old parser can't parse the file at all, so nothing runs.

</details>

## 10. Reflection

In MY-NOTES.md:

- Explain ECMAScript vs JavaScript to a 10-year-old using your own analogy.
- Which ES2015 feature do you think changed JavaScript the most? Why?
- What is still fuzzy?

## 🔑 Key words

| Word | Meaning |
|---|---|
| ECMAScript / ECMA-262 | The language standard |
| TC39 | The committee that evolves it |
| Edition | A yearly version of the standard (ES2015…) |
| Proposal stages | 0 → 1 → 2 → 2.7 → 3 → 4: how a feature becomes standard |
| Transpiler | Rewrites new syntax into older syntax |
| Polyfill | Code that adds a missing built-in API |

## ✅ Done when

- [ ] I ran the example and found `Array.prototype.at` in the spec
- [ ] Both exercises are green
- [ ] Both bugs fixed and explained
- [ ] Design question, quiz and reflection in MY-NOTES.md
- [ ] Committed
