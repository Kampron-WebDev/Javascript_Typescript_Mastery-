# Module 013: The Call Stack

[🏠 Course](../../../README.md) · [Phase 06](../README.md) · [⬅ M012](../../../Part1.JavaScript/P06.JavaScriptInternals/M012.ExecutionContext/README.md) · [M014 ➡](../../../Part1.JavaScript/P06.JavaScriptInternals/M014.Hoisting/README.md)

**Part I · Phase 06: JavaScript Internals** · Status: 📋 Planned (lessons are written just before you reach this module)

## 🧸 The big idea

The call stack is a stack of plates: each function call adds a plate, and each return removes one. The engine only ever works on the top plate.

## 📖 Lessons

| # | Lesson | |
|---|---|---|
| 01 | Stack Frames | 📋 |
| 02 | Recursion on the Stack | 📋 |
| 03 | Stack Overflow | 📋 |
| 04 | Reading Stack Traces & Call-Stack Debugging | 📋 |
| 05 | Module Review | 📋 |

Every lesson follows the 10-part format: Concept → Why it exists → Internal mechanics → Simple example → Real-world example → Coding exercise → Debugging challenge → Design question → Short assessment → Reflection.

## 🛠️ Build it yourself

- Convert a recursive function to use an explicit stack

## 🎯 Mastery gate

Reading a lesson is **not** finishing it. Tick every box, honestly:

- [ ] **Explain it:** I can answer every question below out loud, simply, without notes.
  - Draw the stack for a() → b() → c() at its deepest point.
  - What causes "Maximum call stack size exceeded"?
  - How do you read a stack trace top to bottom?
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
