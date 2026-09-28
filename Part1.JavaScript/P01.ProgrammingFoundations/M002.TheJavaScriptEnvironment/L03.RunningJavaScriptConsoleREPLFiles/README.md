# Lesson 03: Running JavaScript: Console, REPL & Files

[🏠 Course](../../../../README.md) · [Module 002](../README.md) · [⬅ Previous](../L02.EnginesHostsRuntimes/README.md) · [Next ➡](../L04.StrictMode/README.md)

**Module 002 · Lesson 03** · ⏱️ about 1.5 hours · Needs: Lesson 02

---

## 1. Concept

🧸 **Simple version:** there are three ways to talk to JavaScript:

| Way | Like… | Good for |
|---|---|---|
| **REPL** (`node`, or the browser console) | A conversation: you say one thing, it answers immediately | Quick experiments, "what does this return?" |
| **Files** (`node app.js`) | Writing a letter: the whole thing is delivered at once | Real programs you keep, test and commit |
| **One-liners** (`node -e`, `node -p`) | A text message | Tiny checks from the terminal |

And the **console** (`console.log` & friends) is how a program *talks back* to you while it runs.

🎓 **Precise version:**
**REPL** stands for **Read–Eval–Print Loop**: read one input, evaluate it, print the result, repeat. Files are loaded as **modules** or **scripts** (next lessons) and run top to bottom. `console` is a host API (Lesson 02) that writes to the terminal (**stdout** for `log`/`info`, **stderr** for `error`/`warn`) or to the browser DevTools.

## 2. Why it exists

Fast feedback makes fast learning. The REPL gives an answer in a second, which is perfect for checking an assumption before writing it into real code. Files make work **repeatable**: the same program, the same result, testable and version-controlled.
The console is the oldest and simplest debugging tool there is, but most people only use 1 of its ~20 methods.

## 3. Internal mechanics

### The Node REPL: your scratchpad

```text
PS> node
> 2 ** 10
1024
> _ * 2              ← `_` holds the last result
2048
> const words = ['to', 'be']
undefined            ← a statement: nothing to print (Module 001!)
> words.join(' ')
'to be'
> await Promise.resolve(42)    ← top-level await works in the REPL
42
> .help              ← REPL commands start with a dot
> .editor            ← multi-line mode (Ctrl+D to run)
> .load file.js      ← run a file inside the session
> .exit              ← or Ctrl+C twice
```

Press **Tab** to autocomplete. Try `[].` then Tab to see every array method.

### Running files and one-liners

```powershell
node app.js arg1 arg2        # run a file (arguments in process.argv)
node --watch app.js          # re-run automatically every time you save
node --check app.js          # parse only: find syntax errors (Module 001)
node -e "console.log(1 + 1)" # evaluate a one-liner
node -p "Math.max(3, 9)"     # evaluate AND print the result
```

### The console toolbox

| Method | Use it for |
|---|---|
| `console.log(a, b)` | General output (stdout) |
| `console.log({ user })` | **Label + value** in one go. Use this all the time |
| `console.error(…)` / `console.warn(…)` | Problems → **stderr** (logs and CI treat it differently) |
| `console.table(arrayOfObjects)` | Rows and columns |
| `console.dir(obj, { depth: null })` | Print deeply nested objects fully |
| `console.time('x')` / `console.timeEnd('x')` | Measure how long something takes |
| `console.count('label')` | "How many times did this run?" |
| `console.assert(cond, msg)` | Print only when a condition is **false** |
| `console.group()` / `console.groupEnd()` | Indent related output |
| `console.trace()` | Print the current call stack |

### print ≠ return

`console.log` **shows** a value to a human. `return` **gives** a value to the code that called the function. A function that logs its answer instead of returning it looks right in the terminal, but it's broken for every caller, including your tests. That's today's debugging challenge.

## 4. Simple examples

```powershell
cd Examples
node console-tour.js         # every console method in action
node --watch watch-me.js     # edit and save watch-me.js while this runs; Ctrl+C to stop
node -p "process.versions.v8"
```

## 5. Real-world examples

- **Production logging** (Full-Stack Month 30) grows out of `console`: structured logs with levels (`debug`, `info`, `warn`, `error`) and timestamps. You'll build a tiny formatter today.
- **`node --watch`** replaces tools like nodemon in modern projects.
- `console.time` is the first step of **performance work**: measure before you optimise.

## 6. Coding exercises

| # | Exercise | Skill |
|---|---|---|
| 1 | [Log Formatter](Exercises/01_LogFormatter/README.md) | Consistent, structured log lines |
| 2 | [Measure](Exercises/02_Measure/README.md) | Timing code precisely, and returning (not printing) results |

## 7. Debugging challenge

[Print vs Return](Debugging/01_PrintVsReturn/README.md): **2 bugs**. It looks right in the terminal; the tests disagree.

## 8. Design question

> Your team's code is full of `console.log('here')`, `console.log('here2')` and `console.log(data)`. Production logs are unreadable.

In MY-NOTES.md: design simple **logging rules** for the team. What levels do you need? What should every log line contain? What must **never** be logged (think passwords, tokens, personal data)?

## 9. Short assessment

1. What does REPL stand for?
2. What does `_` hold in the Node REPL?
3. `node -e` vs `node -p`?
4. Which console methods write to stderr?
5. Why write `console.log({ total })` instead of `console.log(total)`?
6. A function logs its result but doesn't return it. What does the caller receive?

<details><summary>Answers</summary>

1. Read–Eval–Print Loop.
2. The result of the last evaluated expression.
3. `-e` evaluates code; `-p` evaluates it **and prints** the result.
4. `console.error` and `console.warn` (plus `console.trace`).
5. It prints the **name** too (`{ total: 42 }`), so you know which value you're looking at.
6. `undefined`.

</details>

## 10. Reflection

In MY-NOTES.md:

- Which console method from today had you never heard of? Where will you use it?
- Explain "print vs return" to a 10-year-old.
- What is still fuzzy?

## 🔑 Key words

| Word | Meaning |
|---|---|
| REPL | An interactive Read–Eval–Print Loop |
| stdout / stderr | The standard output and standard error streams |
| `--watch` | Re-run a file whenever it changes |
| Log level | How important a log message is (debug, info, warn, error) |

## ✅ Done when

- [ ] I tried every REPL command in section 3
- [ ] I ran `console-tour.js` and used `--watch`
- [ ] Both exercises are green
- [ ] Both print-vs-return bugs fixed and explained
- [ ] Design question, quiz and reflection in MY-NOTES.md
- [ ] Committed
