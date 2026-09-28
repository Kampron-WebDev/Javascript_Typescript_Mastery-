# Module 025: The Event Loop

[🏠 Course](../../../README.md) · [Phase 11](../README.md) · [⬅ M024](../../../Part1.JavaScript/P11.AsynchronousJavaScript/M024.AsyncAwait/README.md) · [M026 ➡](../../../Part1.JavaScript/P12.NetworkProgramming/M026.FetchAndHTTP/README.md)

**Part I · Phase 11: Asynchronous JavaScript** · Status: 📋 Planned (lessons are written just before you reach this module)

## 🧸 The big idea

The event loop is the cook's rule for what to do next: finish the current dish, then all the quick "microtask" jobs, then the next queued task, and repeat forever.

## 📖 Lessons

| # | Lesson | |
|---|---|---|
| 01 | Call Stack + Runtime APIs | 📋 |
| 02 | The Task (Macrotask) Queue | 📋 |
| 03 | The Microtask Queue | 📋 |
| 04 | Rendering & the Browser Event Loop | 📋 |
| 05 | The Node.js Event Loop Phases | 📋 |
| 06 | Predict-the-Output Drills | 📋 |
| 07 | Module Review | 📋 |

Every lesson follows the 10-part format: Concept → Why it exists → Internal mechanics → Simple example → Real-world example → Coding exercise → Debugging challenge → Design question → Short assessment → Reflection.

## 🎯 Mastery gate

Reading a lesson is **not** finishing it. Tick every box, honestly:

- [ ] **Explain it:** I can answer every question below out loud, simply, without notes.
  - Why does a resolved promise callback run before setTimeout(fn, 0)?
  - How can microtasks starve rendering?
  - Name the Node.js event loop phases in order.
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
