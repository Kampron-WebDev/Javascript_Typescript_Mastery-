# Module 014: Hoisting

[🏠 Course](../../../README.md) · [Phase 06](../README.md) · [⬅ M013](../../../Part1.JavaScript/P06.JavaScriptInternals/M013.CallStack/README.md) · [M015 ➡](../../../Part1.JavaScript/P06.JavaScriptInternals/M015.This/README.md)

**Part I · Phase 06: JavaScript Internals** · Status: 📋 Planned (lessons are written just before you reach this module)

## 🧸 The big idea

"JavaScript moves declarations to the top" is a white lie. What really happens is that the engine registers names during the creation phase, before running a single line, and each kind of declaration is registered differently.

## 📖 Lessons

| # | Lesson | |
|---|---|---|
| 01 | Why "Moved to the Top" Is Misleading | 📋 |
| 02 | Function Declarations | 📋 |
| 03 | var | 📋 |
| 04 | let, const & the Temporal Dead Zone | 📋 |
| 05 | Classes & Hoisting | 📋 |
| 06 | Module Review | 📋 |

Every lesson follows the 10-part format: Concept → Why it exists → Internal mechanics → Simple example → Real-world example → Coding exercise → Debugging challenge → Design question → Short assessment → Reflection.

## 🎯 Mastery gate

Reading a lesson is **not** finishing it. Tick every box, honestly:

- [ ] **Explain it:** I can answer every question below out loud, simply, without notes.
  - What is the Temporal Dead Zone, and why was it added?
  - Why can you call a function declaration before its line, but not a function expression?
  - Explain hoisting without saying "moved to the top".
- [ ] **Implement it:** all exercises are green, and I wrote them without opening solutions first.
- [ ] **Debug it:** I fixed every debugging challenge and can explain *why* each bug happened.
- [ ] **Apply it:** I used this module's ideas in a project or a new program of my own.
- [ ] **Compare alternatives:** I can name another way to solve the same problem.
- [ ] **Identify trade-offs:** I can say when this is the *wrong* tool.

Record the result in [PROGRESS.md](../../../PROGRESS.md).

## 📊 Scoring for this phase (scheme A)

| Area | Weight |
|---|---:|
| Language knowledge | 20% |
| Coding exercises | 20% |
| Problem solving / algorithms | 15% |
| Debugging | 15% |
| Projects | 20% |
| Code design / architecture | 10% |
