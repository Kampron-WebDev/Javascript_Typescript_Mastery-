# 🟨🟦 JavaScript & TypeScript Mastery

A deep, standalone language course: **JavaScript first, TypeScript second.**
It's the *language laboratory* that runs alongside [Full-Stack Engineering Mastery](../Full-Stack-Engineering-Mastery/README.md): this course teaches the languages in depth, and the full-stack course teaches how to engineer systems with them.

**Start here → [00.Orientation](00.Orientation/README.md), then [Module 001, Lesson 01](Part1.JavaScript/P01.ProgrammingFoundations/M001.IntroductionToProgramming/L01.WhatProgrammingReallyIs/README.md).**

🔗 Sibling courses: [Python Engineering Mastery](../Python-Engineering-Mastery/README.md) · The C++ 20 Masterclass. How all four converge: [SYNC.md](../Python-Engineering-Mastery/SYNC.md).

---

## 🎯 By the end you can…

- Write JavaScript confidently without frameworks, and explain how it actually executes
- Solve algorithmic problems and debug difficult runtime problems
- Write correct asynchronous and concurrent-style workflows
- Explain prototypes, closures, modules, iterators, generators and memory behaviour
- Build browser and Node.js applications from raw JavaScript
- Design reusable libraries
- Convert complex JavaScript systems to TypeScript
- Model complex domains with TypeScript's type system, and create reusable generic APIs
- Write declaration files and configure TypeScript professionally
- Build and architect large type-safe applications
- Read unfamiliar JS/TS codebases confidently
- Build serious projects without tutorials

## ❓ Why JavaScript first?

TypeScript **is** JavaScript plus a static type checker. Every TypeScript program runs as plain JavaScript, with the types erased, so all of JavaScript's runtime behaviour (coercion, `this`, closures, the event loop, prototypes) still applies. TypeScript's own documentation recommends learning JavaScript fundamentals first. If you learn TypeScript first, you learn to satisfy a checker without understanding what actually runs.

```text
JavaScript  (what runs)
    +
Static type system  (what's checked before it runs)
    +
Tooling  (autocomplete, refactoring, navigation)
    =
TypeScript
```

---

## 🗺️ The map

**Part I: [JavaScript Mastery](Part1.JavaScript/README.md)** (Phases 1–19, Modules 001–068)

| Phase | Title | Modules |
|---|---|---|
| 01 | [Programming Foundations](Part1.JavaScript/P01.ProgrammingFoundations/README.md) 🟢 | 001–002 |
| 02 | [JavaScript Fundamentals](Part1.JavaScript/P02.JavaScriptFundamentals/README.md) | 003–004 |
| 03 | [Program Flow](Part1.JavaScript/P03.ProgramFlow/README.md) | 005–006 |
| 04 | [Functions](Part1.JavaScript/P04.Functions/README.md) | 007–008 |
| 05 | [JavaScript Data Structures](Part1.JavaScript/P05.DataStructures/README.md) | 009–011 |
| 06 | [JavaScript Internals](Part1.JavaScript/P06.JavaScriptInternals/README.md) | 012–015 |
| 07 | [Object-Oriented JavaScript](Part1.JavaScript/P07.ObjectOrientedJavaScript/README.md) | 016–017 |
| 08 | [Functional JavaScript](Part1.JavaScript/P08.FunctionalJavaScript/README.md) | 018 |
| 09 | [Error Handling](Part1.JavaScript/P09.ErrorHandling/README.md) | 019 |
| 10 | [DOM & Browser Programming](Part1.JavaScript/P10.DOMAndBrowserProgramming/README.md) | 020–021 |
| 11 | [Asynchronous JavaScript](Part1.JavaScript/P11.AsynchronousJavaScript/README.md) | 022–025 |
| 12 | [Network Programming](Part1.JavaScript/P12.NetworkProgramming/README.md) | 026–027 |
| 13 | [Modules](Part1.JavaScript/P13.Modules/README.md) | 028 |
| 14 | [Advanced Language Features](Part1.JavaScript/P14.AdvancedLanguageFeatures/README.md) | 029–034 |
| 15 | [Memory & Performance](Part1.JavaScript/P15.MemoryAndPerformance/README.md) | 035–036 |
| 16 | [Data Structures & Algorithms](Part1.JavaScript/P16.DataStructuresAndAlgorithms/README.md) | 037–052 |
| 17 | [Design Patterns](Part1.JavaScript/P17.DesignPatterns/README.md) | 053–060 |
| 18 | [Testing JavaScript](Part1.JavaScript/P18.TestingJavaScript/README.md) | 061–062 |
| 19 | [Node.js JavaScript](Part1.JavaScript/P19.NodeJS/README.md) | 063–068 |

**Part II: [TypeScript Mastery](Part2.TypeScript/README.md)** (Phases 20–30, Modules 069–103)

| Phase | Title | Modules |
|---|---|---|
| 20 | [TypeScript Foundations](Part2.TypeScript/P20.TypeScriptFoundations/README.md) | 069–071 |
| 21 | [Functions & Objects](Part2.TypeScript/P21.FunctionsAndObjects/README.md) | 072–073 |
| 22 | [Type System Mastery](Part2.TypeScript/P22.TypeSystemMastery/README.md) | 074–076 |
| 23 | [Generics](Part2.TypeScript/P23.Generics/README.md) | 077–079 |
| 24 | [Advanced TypeScript](Part2.TypeScript/P24.AdvancedTypeScript/README.md) | 080–087 |
| 25 | [Classes & OOP in TypeScript](Part2.TypeScript/P25.ClassesAndOOP/README.md) | 088 |
| 26 | [Modules & Configuration](Part2.TypeScript/P26.ModulesAndConfiguration/README.md) | 089–090 |
| 27 | [Declaration Files](Part2.TypeScript/P27.DeclarationFiles/README.md) | 091–092 |
| 28 | [Type-Level Programming](Part2.TypeScript/P28.TypeLevelProgramming/README.md) | 093–096 |
| 29 | [TypeScript Architecture](Part2.TypeScript/P29.TypeScriptArchitecture/README.md) | 097–100 |
| 30 | [Large TypeScript Systems](Part2.TypeScript/P30.LargeTypeScriptSystems/README.md) | 101–103 |

**Projects:** 7 JavaScript projects + a JavaScript capstone, 7 TypeScript projects, then the **[Final Capstone](Final/FinalCapstone/README.md)** and the **[Rescue-the-Codebase challenge](Final/FinalChallenge-RescueTheCodebase/README.md)**.
👉 **[ROADMAP.md](ROADMAP.md)** shows the exact order, with projects slotted in after the phases they need: about **90 weeks (≈ 21 months)**.

🟢 = lessons written · everything else = planned. Detailed lessons are written one module ahead of you, so they stay current and adapt to your weak spots.

---

## 🔗 Running alongside the Full-Stack course

| When you're in Full-Stack… | …you'll be about here | Note |
|---|---|---|
| Months 1–4 (computing, web, HTML, CSS) | Phases 1–7 | This course is your daily JavaScript practice |
| Months 5–6 (JS Core, Advanced JS) | Phases 8–12 | You'll be ahead, so treat those months as revision and still build their projects |
| Months 7–10 | Phases 13–17 | |
| Month 11 (TypeScript) | around Phase 18 | Switch to **Part II Phases 20–23** here. Phases 18–19 (testing, Node) and the JS capstone can be finished afterwards, since your JavaScript fundamentals are complete by Phase 15 |
| Months 12–18 | Phases 24–30 + TypeScript projects | |
| Months 19–21 | Final Capstone + Rescue challenge | Great groundwork for the Full-Stack Month 24 capstone |

---

## 🧩 Every lesson has 10 parts

1. **Concept**: simple analogy first, then the precise words
2. **Why it exists**: the problem it solves
3. **Internal mechanics**: what happens underneath
4. **Simple example**: runnable, in `Examples/`
5. **Real-world example**: where it shows up in production
6. **Coding exercise**: you write it; tests check it
7. **Debugging challenge**: broken code to fix *and* explain
8. **Design question**: how would you structure it?
9. **Short assessment**: quiz with hidden answers
10. **Reflection**: explain it in your own words

## ✅ Mastery gates

You don't finish a module because you read it. For every major concept:

```text
Explain it → Implement it → Debug it → Apply it → Compare alternatives → Identify trade-offs
```

*Example: closures.* Being able to define one isn't enough. You must explain why closures exist, which variables they retain, how they relate to lexical scope, what memory they cost, when they're useful, and when another abstraction would be clearer.

Every module README ends with its gate. Track them in **[PROGRESS.md](PROGRESS.md)**.

## 🧠 Three layers for everything

| Layer | Question | Example (Promises) |
|---|---|---|
| 1 | How do I **use** it? | `.then`, `await`, `Promise.all` |
| 2 | How does it **work**? | States, the microtask queue, and a promise you build yourself |
| 3 | **When** should I use it, and when not? | Promises vs callbacks vs streams vs events |

## 📊 Assessment

| Area | Phases 1–16 (scheme A) | Phases 17–30 (scheme B) |
|---|---:|---:|
| Language knowledge | 20% | 10% |
| Coding exercises | 20% | 15% |
| Problem solving / algorithms | 15% | 15% |
| Debugging | 15% | 15% |
| Projects | 20% | 25% |
| Code design / architecture | 10% | 20% |

Each phase ends with a **phase exam** (knowledge, timed coding, debugging, design). The pass mark is 70% in each part.

## 🛠️ Folder pattern & tools

```text
Part1.JavaScript/P01.ProgrammingFoundations/M001.IntroductionToProgramming/L01.WhatProgrammingReallyIs/
├── README.md            ← the 10-part lesson
├── Examples/            ← run with node
├── Exercises/01_Name/   ← main.js (yours) · main.test.js (checker) · solution/ (after trying!)
├── Debugging/01_Name/   ← same shape, but main.js is broken
└── MY-NOTES.md          ← your answers and reflections
```

| Command | What it does |
|---|---|
| `node --test` *(inside an exercise folder)* | Checks **your** code |
| `npm run check` | Proves every model solution in the course passes |
| `npm run sync-vscode` | Copies the VS Code setup into every lesson folder |
| `powershell -ExecutionPolicy Bypass -File tools\new-lesson.ps1 -Path <folder>` | Scaffolds a new lesson |

VS Code: **Ctrl+Shift+B** runs the open file · **Ctrl+Shift+P → "Tasks: Run Test Task"** tests the exercise · **F5** debugs.

## 📚 Primary references

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [The ECMAScript specification](https://tc39.es/ecma262/): the actual rulebook (you'll learn to read it)
- [Node.js API docs](https://nodejs.org/docs/latest/api/)
- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
