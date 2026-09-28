# Module 015: this

[🏠 Course](../../../README.md) · [Phase 06](../README.md) · [⬅ M014](../../../Part1.JavaScript/P06.JavaScriptInternals/M014.Hoisting/README.md) · [M016 ➡](../../../Part1.JavaScript/P07.ObjectOrientedJavaScript/M016.Prototypes/README.md)

**Part I · Phase 06: JavaScript Internals** · Status: 📋 Planned (lessons are written just before you reach this module)

## 🧸 The big idea

`this` is not "the object the function lives in"; it is decided by how the function is called. Learn the handful of call-site rules and you can predict `this` every time.

## 📖 Lessons

| # | Lesson | |
|---|---|---|
| 01 | Why this Exists | 📋 |
| 02 | Default & Implicit Binding | 📋 |
| 03 | Explicit Binding: call, apply, bind | 📋 |
| 04 | new Binding | 📋 |
| 05 | Arrow Functions & Lexical this | 📋 |
| 06 | this in Classes & Event Handlers | 📋 |
| 07 | Module Review | 📋 |

Every lesson follows the 10-part format: Concept → Why it exists → Internal mechanics → Simple example → Real-world example → Coding exercise → Debugging challenge → Design question → Short assessment → Reflection.

## 🛠️ Build it yourself

- myCall
- myApply
- myBind

## 🎯 Mastery gate

Reading a lesson is **not** finishing it. Tick every box, honestly:

- [ ] **Explain it:** I can answer every question below out loud, simply, without notes.
  - List the binding rules in order of precedence.
  - Why does passing obj.method as a callback lose `this`?
  - Why don't arrow functions have their own `this`?
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
