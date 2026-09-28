# Module 026: Fetch & HTTP

[🏠 Course](../../../README.md) · [Phase 12](../README.md) · [⬅ M025](../../../Part1.JavaScript/P11.AsynchronousJavaScript/M025.EventLoop/README.md) · [M027 ➡](../../../Part1.JavaScript/P12.NetworkProgramming/M027.ResilientAsyncSystems/README.md)

**Part I · Phase 12: Network Programming** · Status: 📋 Planned (lessons are written just before you reach this module)

## 🧸 The big idea

fetch is the postal service: you send a request letter and get a response letter back. A "404 Not Found" letter still counts as delivered, so fetch does not treat it as an error.

## 📖 Lessons

| # | Lesson | |
|---|---|---|
| 01 | Requests & Responses | 📋 |
| 02 | Headers, JSON & Status Codes | 📋 |
| 03 | Error Handling (fetch doesn't reject on 404) | 📋 |
| 04 | AbortController & Timeout Strategies | 📋 |
| 05 | Module Review | 📋 |

Every lesson follows the 10-part format: Concept → Why it exists → Internal mechanics → Simple example → Real-world example → Coding exercise → Debugging challenge → Design question → Short assessment → Reflection.

## 🛠️ Build it yourself

- fetchJson(url, { timeout })

## 🎯 Mastery gate

Reading a lesson is **not** finishing it. Tick every box, honestly:

- [ ] **Explain it:** I can answer every question below out loud, simply, without notes.
  - When does fetch reject, and when doesn't it?
  - How do you add a timeout to fetch?
  - Why read response.ok?
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
