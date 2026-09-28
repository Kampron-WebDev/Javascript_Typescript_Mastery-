# Lesson 04: The Debugging Mindset

[🏠 Course](../../../../README.md) · [Module 001](../README.md) · [⬅ Previous](../L03.FromSourceCodeToRunningProgram/README.md) · [Next ➡](../L05.ModuleReview/README.md)

**Module 001 · Lesson 04** · ⏱️ about 2 hours · Needs: Lesson 03

---

## 1. Concept

🧸 **Simple version: detective vs gambler**

When something breaks, a **gambler** changes random things and re-runs, hoping. Sometimes it "works", and nobody knows why. Usually a new bug appears somewhere else.
A **detective** collects clues, forms a theory, tests the theory, and only then acts. Slower for five minutes, far faster over a career.

🎓 **Precise version:**
**Debugging** is the systematic process of finding the difference between what a program **does** and what you **expect**, finding *why*, and removing the cause. It is the scientific method applied to code:

```text
1. REPRODUCE   Make the bug happen reliably (ideally as a failing test).
2. OBSERVE     Read the error message and stack trace. Gather facts, not guesses.
3. HYPOTHESISE "I think X is undefined because Y."
4. EXPERIMENT  Log, breakpoint or isolate to PROVE or DISPROVE the hypothesis.
5. FIX         Fix the CAUSE, not the symptom.
6. VERIFY      The test passes, nothing else broke, and a test now guards against it forever.
```

## 2. Why it exists

Professional developers spend a large share of their time reading and debugging code, not writing new code. The difference between junior and senior developers is often not *how fast they type*, but *how fast they find the cause*.
"Shotgun debugging" (random changes) is dangerous: it hides symptoms, adds new bugs, and teaches you nothing.

## 3. Internal mechanics: your toolkit

### Tool 1: Read the error message, all of it

```text
file:///C:/…/L04.TheDebuggingMindset/Examples/stack-trace.js:6
  return order.customer.name.toUpperCase();
                        ^
TypeError: Cannot read properties of undefined (reading 'name')      ← WHAT happened
    at customerLabel (file:///C:/…/stack-trace.js:6:25)              ← WHERE it was thrown (top frame)
    at printInvoice (file:///C:/…/stack-trace.js:10:23)              ← who called that
    at file:///C:/…/stack-trace.js:14:1                              ← who called THAT
```

- **Line 1–3:** the exact file, line, and a caret `^` under the problem.
- **Error name + message:** what went wrong. `reading 'name'` means *the thing before `.name`* is undefined, i.e. `order.customer`.
- **Stack frames** (`at …`), **top = most recent**: *where* it happened, then who called it. Skip frames starting with `node:internal`; they're Node's own code.
- Format: `at functionName (file:line:column)`.

### Tool 2: `console.log`, but smart

```js
console.log({ order });            // label + value in one go
console.log(typeof x, x);          // check the TYPE, not just the value ('5' vs 5!)
console.table(rows);               // arrays of objects as a table
console.trace('how did I get here?');
```

### Tool 3: The debugger (breakpoints)

In VS Code: click left of a line number (red dot), then **F5 → "Debug this file"**. The program pauses there, and you can:

| Action | Key | Does |
|---|---|---|
| Continue | F5 | Run to the next breakpoint |
| Step over | F10 | Run this line, stop at the next |
| Step into | F11 | Go *inside* the function call on this line |
| Step out | Shift+F11 | Finish this function, stop in the caller |

The **Variables** panel shows every value *right now*; **Watch** tracks expressions; **Call Stack** shows the frames. You can also write `debugger;` in code as a breakpoint.

### Tool 4: Binary search the problem

A bug is somewhere in 1,000 lines? Disable half. Still broken? It's in the other half. Repeat. **10 steps** narrow 1,000 lines to one.
The same idea on **history**: `git bisect` finds which of 500 commits introduced a bug in about 9 tests (2⁹ = 512). You'll implement this algorithm today.

### Tool 5: Rubber duck

Explain the code, line by line, **out loud**, to a rubber duck (or a patient friend). Very often you hear your own mistake halfway through a sentence. It works because explaining forces you to replace *assumptions* with *facts*.

### The golden rules

- **Question your assumptions.** "That function definitely returns a number." Does it? *Prove it.*
- **Change one thing at a time.**
- **Fix the cause, not the symptom.** Adding `if (x === undefined) return;` everywhere hides the real bug.
- **Make it a test.** Every fixed bug gets a test, so it can never silently return.

## 4. Simple examples

```powershell
cd Examples
node stack-trace.js     # read the trace: which line? which function? which value was undefined?
node bisect-demo.js     # binary search through 1,000 "commits" in about 10 steps
```

Then open `debug-me.js`, set a breakpoint on the marked line, press **F5**, and step through it with F10/F11 while watching the Variables panel.

## 5. Real-world example: a production incident

> 09:14 Monday: "Checkout is failing for some users."

1. **Reproduce:** logs show a `TypeError` only for users *without a saved address*. Create such a test user locally, and the bug reproduces.
2. **Observe:** the stack trace points at `formatShippingLabel` → `address.city`.
3. **Hypothesise:** "Friday's release assumed every user has an address."
4. **Experiment:** `git bisect` confirms that Friday's commit introduced it.
5. **Fix the cause:** checkout now requires an address *before* reaching shipping, instead of a quick `if (!address) return` that would silently ship to nowhere.
6. **Verify:** add a test "checkout without an address asks for one". Deploy. Write a short post-mortem.

## 6. Coding exercises

| # | Exercise | Skill |
|---|---|---|
| 1 | [First Bad Version (bisect)](Exercises/01_FirstBadVersion/README.md) | Binary search: the algorithm behind `git bisect` |
| 2 | [Stack Trace Reader](Exercises/02_StackTraceReader/README.md) | Reading traces precisely, by writing a program that does it |

## 7. Debugging challenge

[Three Bugs](Debugging/01_ThreeBugs/README.md): use the **debugger**, not guesses. Write down hypothesis → experiment → result for each bug.

## 8. Design question

> A bug appears **only in production**, **only for some users**, and **only on Mondays**.

In MY-NOTES.md, write your investigation plan as numbered steps. What would you log? What differs between production and your laptop? What is special about Mondays (think: weekly jobs, time zones, dates)?

## 9. Short assessment

1. Put the six debugging steps in order.
2. In a stack trace, which frame is where the error was thrown?
3. `Cannot read properties of undefined (reading 'city')`: what exactly is undefined?
4. Why check `typeof` and not just the value?
5. How many bisect steps to search 1,000 commits? And a million?
6. What's wrong with fixing a bug by wrapping the failing line in `try { … } catch {}`?

<details><summary>Answers</summary>

1. Reproduce → observe → hypothesise → experiment → fix → verify.
2. The top one (the first `at …` line).
3. The value *before* `.city`, e.g. `address` in `address.city`.
4. `'5'` and `5` look identical when printed, but behave differently (`'5' + 1` is `'51'`).
5. About 10 (2¹⁰ = 1024); about 20 (2²⁰ ≈ 1 million).
6. It hides the symptom and keeps the cause. The program continues in a broken state, and the real bug surfaces later somewhere harder to trace.

</details>

## 10. Reflection

In MY-NOTES.md:

- Think of the last bug you fixed (in C++ or elsewhere). Were you a detective or a gambler? What would the detective have done?
- Which tool from today will you use first next time?
- What is still fuzzy?

## 🔑 Key words

| Word | Meaning |
|---|---|
| Reproduce | Make a bug happen on demand |
| Stack trace | The list of active function calls when an error was thrown |
| Breakpoint | A place where the debugger pauses execution |
| Step over / into / out | Debugger navigation through code |
| Bisect | Binary search through code or history to find where a bug starts |
| Rubber-duck debugging | Explaining code out loud to find mistakes |
| Regression test | A test that stops a fixed bug from coming back |

## ✅ Done when

- [ ] I read the stack trace in `stack-trace.js` and could explain every line
- [ ] I stepped through `debug-me.js` with breakpoints (F10, F11)
- [ ] Both exercises are green
- [ ] All three bugs fixed, **with** hypothesis → experiment notes
- [ ] Design question, quiz and reflection in MY-NOTES.md
- [ ] Committed
