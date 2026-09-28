# Module 012: Execution Context

[🏠 Course](../../../README.md) · [Phase 06](../README.md) · [⬅ M011](../../../Part1.JavaScript/P05.DataStructures/M011.Collections/README.md) · [M013 ➡](../../../Part1.JavaScript/P06.JavaScriptInternals/M013.CallStack/README.md)

**Part I · Phase 06: JavaScript Internals** · Status: 📋 Planned (lessons are written just before you reach this module)

## 🧸 The big idea

Every time code runs, the engine sets up a workspace (an execution context) that records which variables exist and what `this` is. Understanding the workspace explains hoisting, closures and `this` at once.

## 📖 Lessons

| # | Lesson | |
|---|---|---|
| 01 | What Is an Execution Context? | 📋 |
| 02 | The Global Execution Context | 📋 |
| 03 | Function Execution Contexts | 📋 |
| 04 | Creation Phase vs Execution Phase | 📋 |
| 05 | Environment Records | 📋 |
| 06 | Module Review | 📋 |

Every lesson follows the 10-part format: Concept → Why it exists → Internal mechanics → Simple example → Real-world example → Coding exercise → Debugging challenge → Design question → Short assessment → Reflection.

## 🎯 Mastery gate

Reading a lesson is **not** finishing it. Tick every box, honestly:

- [ ] **Explain it:** I can answer every question below out loud, simply, without notes.
  - What happens in the creation phase vs the execution phase?
  - What is stored in an environment record?
  - How do execution contexts explain closures?
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
