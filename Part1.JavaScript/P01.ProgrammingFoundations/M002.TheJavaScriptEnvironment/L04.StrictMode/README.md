# Lesson 04: Strict Mode

[🏠 Course](../../../../README.md) · [Module 002](../README.md) · [⬅ Previous](../L03.RunningJavaScriptConsoleREPLFiles/README.md) · [Next ➡](../L05.ModulesAFirstLook/README.md)

**Module 002 · Lesson 04** · ⏱️ about 1.5 hours · Needs: Lesson 03

---

## 1. Concept

🧸 **Simple version: the strict referee**

Early JavaScript had a very *relaxed* referee. Kick the ball out of the stadium? "Eh, play on." Misspell a player's name? "I'll just invent a new player." The game kept going, but the score was quietly wrong.
**Strict mode** is the **strict referee**: it blows the whistle the moment something is clearly a mistake. Annoying for a second, but you find bugs *immediately*, at the exact spot.

🎓 **Precise version:**
**Strict mode** (ES5, 2009) is an opt-in variant of JavaScript with stricter rules. It turns several **silent mistakes into thrown errors**, removes some confusing features, and makes code easier for engines to optimise. The relaxed default is informally called **sloppy mode**.

You get strict mode by:

- putting the directive `'use strict';` at the very **top** of a script or function, or
- (automatically, and this is what matters today) writing an **ES module** or a **class body**. Both are **always** strict.

Every file in this course is an ES module, so **you're always in strict mode here**.

## 2. Why it exists

JavaScript can't simply fix its early design mistakes: millions of old websites depend on them ("don't break the web", Lesson 01). Strict mode was the compromise: new code can **opt into** saner rules, old code keeps working. Modules and classes (ES2015) made it the default, because they were new syntax with no old code to break.

## 3. Internal mechanics: what actually changes

| Situation | Sloppy mode | Strict mode |
|---|---|---|
| Assigning to an **undeclared** variable (typo!) | Silently **creates a global variable** | `ReferenceError` |
| `this` inside a plain function call `f()` | The global object | `undefined` |
| Writing to a read-only / frozen property | Silently ignored | `TypeError` |
| `delete` on an undeletable property | Silently returns `false` | `TypeError` |
| Duplicate parameter names `function f(a, a)` | Allowed | `SyntaxError` |
| The `with` statement | Allowed | `SyntaxError` |
| Legacy octal literals `010` (means 8!) | Allowed | `SyntaxError` (write `0o10`) |
| Future reserved words (`implements`, `private`, `interface`…) as names | Allowed | `SyntaxError` |

Two worth remembering forever:

```js
// SLOPPY: a typo quietly creates a global, and the function returns the wrong answer
function total(prices) {
  let sum = 0;
  for (const p of prices) summ = sum + p;   // typo: summ
  return sum;                               // always 0, and a global `summ` now exists 😱
}

// STRICT: the same typo → ReferenceError: summ is not defined, on the exact line.
```

```js
const config = Object.freeze({ retries: 3 });
config.retries = 10;
// sloppy: silently ignored, so config.retries is still 3 and nobody knows
// strict: TypeError: Cannot assign to read only property 'retries'
```

## 4. Simple examples

```powershell
cd Examples
node sloppy-vs-strict.cjs   # a .cjs file is a sloppy CommonJS SCRIPT: watch the silent failures
node strict-module.js       # the same code in an ES module (always strict): errors instead
```

## 5. Real-world examples

- **ES modules, classes, TypeScript output and modern bundlers** all produce strict-mode code. Strict is simply how modern JavaScript runs.
- Old libraries sometimes break when bundled as modules because they relied on sloppy behaviour (e.g. `this` being the global object).
- Linters (ESLint) catch many of the same mistakes, *before* running. Belt and braces.

## 6. Coding exercise

| # | Exercise | Skill |
|---|---|---|
| 1 | [Compare Modes](Exercises/01_CompareModes/README.md) | Running the same code in both modes and classifying the outcome |

## 7. Debugging challenge

[Strict Surprises](Debugging/01_StrictSurprises/README.md): **2 bugs** that sloppy mode would have *hidden*. Strict mode exposes them.

## 8. Design question

> You inherit a 10-year-old codebase of plain `<script>` files (sloppy mode) and want to move it to ES modules.

In MY-NOTES.md: which strict-mode changes are most likely to **break** the old code when it becomes a module? How would you find those places *before* switching? (Think: linters, tests, searching for patterns.)

## 9. Short assessment

1. How do you enable strict mode? Name three ways.
2. Are ES modules strict? Classes?
3. What does sloppy mode do when you assign to a misspelled variable?
4. What is `this` inside a plain function call in strict mode?
5. Why wasn't strict mode simply made the default for all code?
6. `Object.freeze(o); o.x = 1;`: what happens in each mode?

<details><summary>Answers</summary>

1. `'use strict';` at the top of a script, `'use strict';` at the top of a function, or writing an ES module or class (automatically strict).
2. Yes, both are always strict.
3. It silently creates a new global variable.
4. `undefined`.
5. It would break existing websites that rely on sloppy behaviour ("don't break the web").
6. Sloppy: silently ignored. Strict: `TypeError`.

</details>

## 10. Reflection

In MY-NOTES.md:

- Explain sloppy vs strict mode to a 10-year-old (the referee, or your own analogy).
- Why is "fail loudly and early" usually better than "keep going quietly"? Can you think of a case where it isn't?
- What is still fuzzy?

## 🔑 Key words

| Word | Meaning |
|---|---|
| Strict mode | A stricter variant of JS that turns silent mistakes into errors |
| Sloppy mode | The relaxed, legacy default for scripts |
| Directive | A special string statement like `'use strict';` |
| Implicit global | A global accidentally created by assigning to an undeclared name |
| Frozen object | An object whose properties can't be changed (`Object.freeze`) |

## ✅ Done when

- [ ] I ran both examples and compared the output
- [ ] Compare Modes is green (predictions written first)
- [ ] Both strict surprises fixed and explained
- [ ] Design question, quiz and reflection in MY-NOTES.md
- [ ] Committed
