# Lesson 05: Modules: A First Look

[🏠 Course](../../../../README.md) · [Module 002](../README.md) · [⬅ Previous](../L04.StrictMode/README.md) · [Next ➡](../L06.ModuleReview/README.md)

**Module 002 · Lesson 05** · ⏱️ about 2 hours · Needs: Lesson 04

> This is a **first look**. Module 028 goes deep: live bindings, cycles, CommonJS interop, package `exports`, resolution.

---

## 1. Concept

🧸 **Simple version: rooms with doors**

Imagine a house where every room is private. What happens inside a room stays inside, **unless** you deliberately pass it through the door (**export**). Other rooms decide what they want to bring in (**import**).
Without rooms (the old way), everyone lived in one giant hall. Every variable was shared, names clashed, and nobody knew who depended on what.

🎓 **Precise version:**
An **ES module** (ES2015) is a file with its **own scope** that explicitly **exports** bindings and **imports** bindings from other modules. The engine builds a **module graph** from the `import` statements *before* running any code.

| | Classic script | ES module |
|---|---|---|
| Top-level variables | Become **globals** (shared by all scripts) | **Private** to the file |
| Strict mode | Opt-in | **Always** |
| `this` at the top level | The global object | `undefined` |
| Dependencies | Implicit (load order in HTML!) | Explicit `import` |
| Evaluated | Every time it's included | **Once**, even if imported 100 times |
| Top-level `await` | ❌ | ✅ |

## 2. Why it exists

Big programs need to be split across many files. Before modules, the browser just ran `<script>` files in order, all sharing **one** global scope. Two libraries both defining `format`? The last one silently won. Forgot to include a file before the one that used it? Crash.
Node invented its own system (**CommonJS**: `require` / `module.exports`) in 2009. ES2015 finally gave the *language* a standard module system that works in browsers **and** Node.

## 3. Internal mechanics

### Export and import: the syntax

```js
// money.js
export const CURRENCY = 'USD';                          // named export
export function formatMoney(cents) { … }                // named export
export default function parseMoney(text) { … }          // default export (max ONE per module)

// main.js
import parseMoney, { formatMoney, CURRENCY } from './money.js';   // default + named
import { formatMoney as fmt } from './money.js';                  // rename on import
import * as money from './money.js';                              // everything, as one object
```

Rules that bite beginners:

- **Named** imports must match the exported names exactly: `{ formatMoney }`.
- A **default** import can be called anything, but the module must *have* a default export.
- In Node, **relative imports need the file extension**: `'./money.js'`, not `'./money'`.
- Built-ins use the `node:` prefix: `import fs from 'node:fs'`.

### How Node decides "module or script?"

| File | Treated as |
|---|---|
| `something.mjs` | ES module, always |
| `something.cjs` | CommonJS, always |
| `something.js` | Depends on the nearest `package.json`: `"type": "module"` → ES module, otherwise CommonJS |

This course's `package.json` says `"type": "module"`, which is why every `.js` file here is an ES module (and strict).

### Loading happens in phases

```text
1. Construction  read main.js → find its imports → read those files → find THEIR imports …
                 (a missing file fails HERE, before anything runs)
2. Linking       connect every import to the matching export
                 (importing a name that isn't exported fails HERE, still before anything runs)
3. Evaluation    run each module's code ONCE, dependencies first
```

## 4. Simple examples

```powershell
cd Examples\shop
node main.js            # three modules working together

cd ..\run-once
node main.js            # two modules import counter.js: how many times does it run?

cd ..
node legacy.cjs         # the old CommonJS way, for comparison
```

## 5. Real-world examples

- Every modern codebase (React apps, Node services, libraries) is organised as modules. You'll design folder/module structures in Part II (Module 101).
- Browsers load modules with `<script type="module" src="main.js">`.
- `import()` (a function-like *dynamic* import) loads code only when needed, for example loading the admin panel code only when an admin logs in. That's covered in Module 028.

## 6. Coding exercise

| # | Exercise | Skill |
|---|---|---|
| 1 | [Split into Modules](Exercises/01_SplitIntoModules/README.md) | Named and default exports across three files |

## 7. Debugging challenge

[Import Mismatch](Debugging/01_ImportMismatch/README.md): **2 bugs**. The code never even starts running.

## 8. Design question

> You're splitting a 2,000-line `app.js` for a shop into modules.

In MY-NOTES.md: propose 5–8 module names and what each exports. Which modules may import which? Draw the arrows. Is there any module that **everything** depends on? Any pair that depends on each other (a cycle)? Why might that be a problem?

## 9. Short assessment

1. Three differences between a classic script and an ES module.
2. How many default exports can a module have?
3. `import { format } from './utils'` fails in Node. Why?
4. `import total from './cart.js'` but `cart.js` only has `export function total`. What happens, and when?
5. A module is imported by 10 other modules. How many times does its top-level code run?
6. How does Node decide whether `app.js` is an ES module?

<details><summary>Answers</summary>

1. Any three of: private top-level scope, always strict, `this` is `undefined` at the top level, explicit imports and exports, evaluated only once, top-level `await`.
2. At most one.
3. Relative imports in Node ESM need the full file name, including the extension: `'./utils.js'`.
4. A `SyntaxError` ("does not provide an export named 'default'") during **linking**, before any code runs. Use `import { total } from './cart.js'`.
5. Once.
6. From the nearest `package.json`'s `"type"` field (`"module"` → ESM). `.mjs` and `.cjs` extensions override it.

</details>

## 10. Reflection

In MY-NOTES.md:

- Explain modules to a 10-year-old (rooms with doors, or your own analogy).
- What was the most confusing part of named vs default exports?
- What is still fuzzy?

## 🔑 Key words

| Word | Meaning |
|---|---|
| ES module (ESM) | A file with its own scope, using `import` / `export` |
| Named export | Exported under a specific name; imported with `{ name }` |
| Default export | The module's single "main" export; imported with any name |
| Module graph | The network of modules connected by imports |
| Specifier | The string in an import: `'./money.js'`, `'node:fs'` |
| CommonJS (CJS) | Node's older module system: `require` / `module.exports` |

## ✅ Done when

- [ ] I ran all three examples and explained the run-once result
- [ ] Split into Modules is green
- [ ] Both import bugs fixed and explained
- [ ] Design question, quiz and reflection in MY-NOTES.md
- [ ] Committed
