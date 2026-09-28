# Module 027: Resilient Async Systems

[🏠 Course](../../../README.md) · [Phase 12](../README.md) · [⬅ M026](../../../Part1.JavaScript/P12.NetworkProgramming/M026.FetchAndHTTP/README.md) · [M028 ➡](../../../Part1.JavaScript/P13.Modules/M028.JavaScriptModules/README.md)

**Part I · Phase 12: Network Programming** · Status: 📋 Planned (lessons are written just before you reach this module)

## 🧸 The big idea

Networks are flaky, users click too fast, and servers get overwhelmed. Resilience utilities are shock absorbers for all three.

## 📖 Lessons

| # | Lesson | |
|---|---|---|
| 01 | Retries & Exponential Backoff | 📋 |
| 02 | Debounce & Throttle | 📋 |
| 03 | Rate Limiting | 📋 |
| 04 | Cancellation | 📋 |
| 05 | Queues & Concurrency Limiting | 📋 |
| 06 | Module Review | 📋 |

Every lesson follows the 10-part format: Concept → Why it exists → Internal mechanics → Simple example → Real-world example → Coding exercise → Debugging challenge → Design question → Short assessment → Reflection.

## 🛠️ Build it yourself

- retry()
- debounce()
- throttle()
- createRateLimiter()
- TaskQueue

## 🎯 Mastery gate

Reading a lesson is **not** finishing it. Tick every box, honestly:

- [ ] **Explain it:** I can answer every question below out loud, simply, without notes.
  - Debounce vs throttle, with a UI example of each.
  - Why add jitter to backoff?
  - Which requests are safe to retry?
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
