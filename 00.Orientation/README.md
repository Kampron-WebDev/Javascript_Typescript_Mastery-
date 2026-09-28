# 00 · Orientation

[🏠 Course](../README.md) · Next: [Module 001 · Lesson 01 ➡](../Part1.JavaScript/P01.ProgrammingFoundations/M001.IntroductionToProgramming/L01.WhatProgrammingReallyIs/README.md)

⏱️ About 1 hour. Do this once, before Lesson 01.

---

## 🧸 What kind of course is this?

The Full-Stack course teaches you to build **houses** (applications and systems).
This course makes you a master of your **tools**: the two languages you'll use every day for years.

A carpenter who deeply understands wood and tools builds better houses than one who only follows plans. That's the goal here: when something strange happens in JavaScript or TypeScript, you'll know **why**.

## Step 1 · Check your tools

```powershell
node --version   # v24 or newer (you have it)
git --version
```

Open **this folder** in VS Code and install the recommended extensions when asked.

## Step 2 · Make it a Git repository

```powershell
cd "$HOME\Desktop\JavaScript-TypeScript-Mastery"
git init
git add .
git commit -m "Start JavaScript & TypeScript Mastery"
```

Commit at the end of every lesson: `git commit -am "M001 L01 done"` (use `git add .` first if you created new files).

## Step 3 · How a lesson works

1. Read the lesson `README.md`: parts 1–5 teach, parts 6–10 make you *prove* it.
2. Run every file in `Examples/` and **change things** until something breaks. Breaking things on purpose is how you learn their edges.
3. Do the `Exercises/`: open `main.js`, run `node --test` in that folder, and go from ❌ red to ✅ green.
4. Fix the `Debugging/` challenge, and write down *why* the bug happened.
5. Answer the design question, quiz and reflection in `MY-NOTES.md`.
6. Commit.

At the end of each module, the **Module Review** lesson has a mixed quiz, a no-hints challenge and the mastery gate. At the end of each phase comes the **phase exam**.

## Step 4 · The rules

1. **Predict before you run.** Before running any example, write down what you *think* it will print. Being wrong is the lesson.
2. **Type it yourself.** No copy-pasting examples.
3. **The 20-minute rule.** Stuck? Struggle honestly for 20 minutes (console.log, the debugger, re-reading), then take one hint, then the solution.
4. **AI is a tutor, not a ghostwriter.** Ask it to explain concepts and error messages. Don't let it write your exercises.
5. **Go to the source.** When a lesson links to MDN or the spec, open it. Reading official docs is a senior skill, and you start practising now.
6. **Gates, not calendars.** Move on only when the module gate is honestly ticked.

## Step 5 · Warm-up

- Skim the [Syntax Preview](Syntax-Preview.md). Phase 1 uses a little syntax before Phases 2–4 teach it properly.
- Do [Exercise 01: Warm-Up](Exercises/01_WarmUp/README.md) to prove your setup works.

✅ **Orientation is done when:** the repo has its first commit and the warm-up is green.

➡ **Next:** [Module 001 · Lesson 01: What Programming Really Is](../Part1.JavaScript/P01.ProgrammingFoundations/M001.IntroductionToProgramming/L01.WhatProgrammingReallyIs/README.md)
