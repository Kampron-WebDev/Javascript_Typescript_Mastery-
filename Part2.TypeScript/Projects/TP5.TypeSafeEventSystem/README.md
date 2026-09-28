# TP5: Type-Safe Event System

[🏠 Course](../../../README.md) · [🗺️ Roadmap](../../../ROADMAP.md)

**Do after:** [Phase 24: Advanced TypeScript](../../../Part2.TypeScript/P24.AdvancedTypeScript/README.md) · ⏱️ about 1 week

## 🎯 Brief

An event emitter where event names determine payload types.

## ✅ Requirements

- [ ] emit("user:created", user) is type-checked
- [ ] Wrong payloads fail at compile time
- [ ] on / off / once
- [ ] Tests with @ts-expect-error for invalid calls

## 📦 Deliverables

- Its **own Git repository** (this is portfolio work; link it in PROGRESS.md)
- `README.md`: what it is, how to run it, how to test it
- `ARCHITECTURE.md`: modules, data flow, and the 3 most important decisions with their trade-offs
- A test suite that passes with one command

## 📊 Rubric (100 points)

| Area | Points |
|---|---:|
| Functionality: every requirement works, edge cases handled | 30 |
| Code design: clear modules, names, no duplication | 20 |
| Tests: meaningful, green, cover the core logic | 20 |
| Error handling & robustness | 10 |
| Documentation: README + ARCHITECTURE.md | 10 |
| Defence: you can justify every major decision | 10 |

## 🚫 Rules

No tutorials, no AI-written code. Use AI only to *explain* concepts or errors.
📋 A detailed spec with acceptance tests is written when you reach this project.
