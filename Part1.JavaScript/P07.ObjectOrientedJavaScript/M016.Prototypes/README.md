# Module 016: Prototypes

[🏠 Course](../../../README.md) · [Phase 07](../README.md) · [⬅ M015](../../../Part1.JavaScript/P06.JavaScriptInternals/M015.This/README.md) · [M017 ➡](../../../Part1.JavaScript/P07.ObjectOrientedJavaScript/M017.Classes/README.md)

**Part I · Phase 07: Object-Oriented JavaScript** · Status: 📋 Planned (lessons are written just before you reach this module)

## 🧸 The big idea

When an object doesn't know something, it asks its parent (its prototype), which asks its parent, and so on up the chain. That chain of "ask your parent" is all of JavaScript inheritance.

## 📖 Lessons

| # | Lesson | |
|---|---|---|
| 01 | Objects Linking to Objects | 📋 |
| 02 | Prototype Lookup | 📋 |
| 03 | Constructor Functions & .prototype | 📋 |
| 04 | __proto__ vs Object.getPrototypeOf | 📋 |
| 05 | Object.create | 📋 |
| 06 | Prototypal Inheritance | 📋 |
| 07 | Module Review | 📋 |

Every lesson follows the 10-part format: Concept → Why it exists → Internal mechanics → Simple example → Real-world example → Coding exercise → Debugging challenge → Design question → Short assessment → Reflection.

## 🛠️ Build it yourself

- myNew()
- myInstanceOf()
- A hand-built prototype chain

## 🎯 Mastery gate

Reading a lesson is **not** finishing it. Tick every box, honestly:

- [ ] **Explain it:** I can answer every question below out loud, simply, without notes.
  - What is the difference between `.prototype` and an object's prototype?
  - Trace a property lookup through three levels of prototypes.
  - What does `new` do, step by step?
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
