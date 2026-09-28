# Lesson 03: From Source Code to Running Program

[🏠 Course](../../../../README.md) · [Module 001](../README.md) · [⬅ Previous](../L02.ValuesExpressionsStatements/README.md) · [Next ➡](../L04.TheDebuggingMindset/README.md)

**Module 001 · Lesson 03** · ⏱️ about 1.5–2 hours · Needs: Lesson 02

---

## 1. Concept

🧸 **Simple version: putting on a play**

Before a play is performed, the director **reads the whole script** to check it makes sense. If a page is missing or a sentence is gibberish, the play **never starts**, not even the first scene.
Once the script is approved, the actors **perform** it scene by scene. Things can still go wrong on stage (an actor drops a prop), and that stops the show *at that moment*.
And sometimes the whole play runs smoothly… but it's the wrong story. Nobody stops it; the audience just leaves unhappy.

That's exactly how JavaScript runs your file, and it gives you **three kinds of errors**:

| Kind | When | Play version | JS example |
|---|---|---|---|
| **Syntax error** | While *parsing*, before anything runs | Gibberish in the script | `let x = ;` |
| **Runtime error** | While *running*, at that line | Actor drops a prop | `null.length` → TypeError |
| **Logic error** | Never "fails", just gives the wrong result | Wrong story | `total - tax` where you meant `total + tax` |

🎓 **Precise version:**
Source code (text) is **parsed** into an abstract syntax tree (AST). If the text breaks the grammar, the engine throws a `SyntaxError` and **executes nothing**. Otherwise the AST is compiled to bytecode and **executed**. During execution, operations that can't be performed throw **runtime exceptions** (`TypeError`, `ReferenceError`, `RangeError`…). Logic errors are not detected by the engine at all; only **tests** (and users) find them.

## 2. Why it exists

Knowing *when* an error can happen tells you *where to look* and *which tool catches it*:

- Syntax errors → the editor, `node --check`, linters. You never need to run the program to find them.
- Runtime errors → the stack trace shows the exact line. Tests and error monitoring catch the rest.
- Logic errors → only **tests** and careful reasoning. This is why professional code has tests.

Later, **TypeScript** (Part II) moves many runtime errors (like calling `.length` on something that might be `null`) *earlier*, to before the program runs. That's a big reason it exists.

## 3. Internal mechanics: the pipeline

```text
  main.js (text)
      │
      ▼  1. PARSE  ── lexer → tokens → parser → AST
      │      ✗ grammar broken? → SyntaxError, and NOTHING runs
      ▼
  2. COMPILE to bytecode (V8's Ignition)
      │      hot code is later re-compiled to fast machine code (TurboFan): "JIT"
      ▼
  3. EXECUTE, statement by statement
      │      ✗ impossible operation? → runtime error thrown at that line
      ▼
  program finishes (maybe with a logic error that nobody noticed)
```

Two consequences that surprise beginners:

1. **A syntax error on line 200 stops line 1 from running.** The whole file is parsed first. `Examples/broken-on-purpose.js` proves it.
2. **The engine knows about all your declarations before running line 1.** That's how you can call a function declared further down the file. You'll study this properly as *hoisting* (Module 014).

Not every `SyntaxError` is a parse error! `JSON.parse('{oops')` throws a `SyntaxError` **at runtime**, because the JSON *text* is parsed while your program runs. The error's **name** tells you *what* went wrong; the **phase** tells you *when*.

### Common runtime errors

| Error | Meaning | Typical cause |
|---|---|---|
| `ReferenceError` | "I don't know that name" | Typo in a variable name, or using a variable before `let` declares it |
| `TypeError` | "That value can't do that" | `undefined.x`, calling something that isn't a function, changing a `const` |
| `RangeError` | "That number is out of range" | `new Array(-1)`, `(1).toFixed(500)`, infinite recursion |
| `SyntaxError` (at runtime) | "This text isn't valid" | `JSON.parse`, `new Function`, `new RegExp('(')` |

## 4. Simple examples

```powershell
cd Examples
node broken-on-purpose.js         # predict: does the first console.log print?
node --check broken-on-purpose.js # parse WITHOUT running: finds the error safely
node error-kinds.js               # one of each runtime error, caught and described
```

## 5. Real-world examples

A professional pipeline puts a net under each kind of error:

```text
Editor squiggles, linter, node --check   → catch syntax errors while you type
TypeScript (Part II)                     → catches many would-be runtime errors before running
Unit & integration tests                 → catch logic errors (and runtime ones)
CI pipeline                              → runs all of the above on every change
Error monitoring (e.g. Sentry)           → catches runtime errors real users hit in production
```

## 6. Coding exercises

| # | Exercise | Skill |
|---|---|---|
| 1 | [When Does It Fail?](Exercises/01_WhenDoesItFail/README.md) | Telling parse-time from run-time failures |
| 2 | [Cause Every Error](Exercises/02_CauseEveryError/README.md) | Knowing exactly what triggers each runtime error |

## 7. Debugging challenge

[Parse First](Debugging/01_ParseFirst/README.md): 2 bugs, one per phase. Fixing the first reveals the second.

## 8. Design question

> A small team (3 developers) ships a JavaScript web app and has **time to set up only two** of these: `node --check` in CI · a linter (ESLint) · unit tests · TypeScript · production error monitoring.

In MY-NOTES.md: which two would you pick first, and why? For each tool, name which of the three error kinds it catches.

## 9. Short assessment

1. Name the three kinds of errors and when each is detected.
2. A file has a typo on its last line: `consol.log('bye')`. Does the first line run? And if the typo were `let = 5;` instead?
3. What does `node --check file.js` do?
4. `JSON.parse('{bad')` throws a `SyntaxError`. Is that a parse-time error of *your program*?
5. Which kind of error can the engine never detect by itself?

<details><summary>Answers</summary>

1. Syntax errors (at parse time, before anything runs), runtime errors (while running, at the failing line), and logic errors (never detected by the engine; found by tests or users).
2. `consol.log` is valid grammar (it's a property access on a name), so the file parses and the first line runs; it fails at runtime with a ReferenceError. `let = 5;` breaks the grammar, so nothing runs at all.
3. It parses the file and reports syntax errors **without executing** it.
4. No. Your program parsed fine; the error happens at runtime, when `JSON.parse` parses a *string*.
5. Logic errors.

</details>

## 10. Reflection

In MY-NOTES.md:

- Explain the three kinds of errors to a 10-year-old (the play analogy, or your own).
- Which kind of error do you think costs companies the most money? Why?
- What is still fuzzy?

## 🔑 Key words

| Word | Meaning |
|---|---|
| Parse | Check grammar and build the AST |
| AST | Abstract Syntax Tree: the structure of your code |
| Syntax error | Grammar broken; detected before running |
| Runtime error / exception | An impossible operation during execution |
| Logic error | Code runs, but does the wrong thing |
| Bytecode | Compact instructions the engine's interpreter runs |
| JIT | Compiling hot code to machine code while running |

## ✅ Done when

- [ ] I predicted and ran all three examples, including `node --check`
- [ ] Both exercises are green
- [ ] Both Parse-First bugs fixed and explained
- [ ] Design question, quiz and reflection in MY-NOTES.md
- [ ] Committed
