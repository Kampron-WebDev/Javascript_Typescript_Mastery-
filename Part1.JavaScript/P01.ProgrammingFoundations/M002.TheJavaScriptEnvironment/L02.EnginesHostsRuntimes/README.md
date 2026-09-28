# Lesson 02: Engines, Hosts & Runtimes

[🏠 Course](../../../../README.md) · [Module 002](../README.md) · [⬅ Previous](../L01.ECMAScriptVsJavaScript/README.md) · [Next ➡](../L03.RunningJavaScriptConsoleREPLFiles/README.md)

**Module 002 · Lesson 02** · ⏱️ about 1.5–2 hours · Needs: Lesson 01

---

## 1. Concept

🧸 **Simple version: the engine and the car**

An **engine** makes a car go, but an engine on its own is useless: no wheels, no steering wheel, no seats.
The same V8 engine is fitted into different **cars**:

- 🌐 In **Chrome** it gets web "parts": `document`, `window`, `localStorage`, buttons and pages.
- 🖥️ In **Node.js** it gets server "parts": `fs` (files), `process`, `http`, `Buffer`.

The engine knows the **language** (ECMAScript). The car (the **host**) supplies everything else.

🎓 **Precise version:**

| Term | What it is | Examples |
|---|---|---|
| **Engine** | Parses, compiles and executes ECMAScript | V8 (Chrome, Edge, Node, Deno) · SpiderMonkey (Firefox) · JavaScriptCore (Safari, Bun) |
| **Host** | The program that embeds an engine and provides the environment | A browser, Node.js, Deno, Bun |
| **Host APIs** | Everything *not* in ECMAScript that the host adds | `document`, `fetch`, `setTimeout`, `console`, `process`, `fs` |
| **Runtime** | Engine + host APIs + event loop, together | "the Node.js runtime", "the browser runtime" |

## 2. Why it exists

ECMAScript deliberately says **nothing** about screens, files or networks. That's what lets the same language run in a web page, a server, a phone app, a database or a smart TV.
The downside is real confusion: people assume `console.log`, `setTimeout` or `fetch` are "JavaScript". They're not part of the language, and that matters when code moves between hosts.

## 3. Internal mechanics

```text
┌───────────────────────── BROWSER RUNTIME ─────────────────────────┐   ┌─────────────────────── NODE.JS RUNTIME ───────────────────────┐
│  ECMAScript engine (V8 / SpiderMonkey / JSC)                      │   │  ECMAScript engine (V8)                                       │
│    Array · Object · Promise · Map · JSON · Math …                 │   │    Array · Object · Promise · Map · JSON · Math …             │
│  Web APIs (HTML & WHATWG standards)                               │   │  Node APIs                                                    │
│    document · window · localStorage · alert · DOM events          │   │    process · Buffer · fs · http · path · require (CommonJS)   │
│  Shared "web platform" APIs                                        │   │  Shared "web platform" APIs (Node implements these too)       │
│    console · setTimeout · fetch · URL · TextEncoder · structuredClone   console · setTimeout · fetch · URL · TextEncoder · …       │
│  Event loop (in the browser)                                      │   │  Event loop (libuv)                                           │
└───────────────────────────────────────────────────────────────────┘   └───────────────────────────────────────────────────────────────┘
```

Three layers of "who provides it":

1. **The language** (ECMAScript): identical everywhere.
2. **Host-specific:** only in browsers (`document`) or only in Node (`process`).
3. **Shared host APIs:** not in ECMAScript, but *both* hosts implement them from web standards, e.g. `console` (the WHATWG Console standard) and `fetch` (the WHATWG Fetch standard). Server runtimes coordinate on this shared set through Ecma's **TC55 (WinterTC)**.

Even "shared" APIs can differ in details: `setTimeout` returns a **number** in browsers, but a **`Timeout` object** in Node.

### `globalThis`

Every host has one **global object** holding all the global names. Its name used to differ: `window` in browsers, `global` in Node, `self` in workers. **`globalThis`** (ES2020) is the one name that works everywhere.

## 4. Simple examples

```powershell
cd Examples
node globals.js    # which global names does Node give you, and who provides each?
```

Then open **any web page**, press **F12 → Console**, and paste the contents of `browser-check.js`. Compare the results with Node's.

## 5. Real-world examples

- **Next.js / server rendering** (Full-Stack Year 2) runs the *same* component in Node **and** in the browser. Code touching `window` or `localStorage` crashes on the server. It's the #1 beginner bug there.
- **Libraries** say which hosts they support ("works in Node, Deno, Bun and browsers") by using only language features and shared APIs.
- **Edge runtimes** (Cloudflare Workers, Vercel Edge) are yet another host: V8 plus web-standard APIs, but *no* `fs` or `process`.

## 6. Coding exercises

| # | Exercise | Skill |
|---|---|---|
| 1 | [Who Provides It?](Exercises/01_WhoProvidesIt/README.md) | Classifying globals: language vs host |
| 2 | [Global Inventory](Exercises/02_GlobalInventory/README.md) | Inspecting a real global object with your classifier |

## 7. Debugging challenge

[Module Gotchas](Debugging/01_ModuleGotchas/README.md): **2 bugs**. Code copied from an old Node tutorial fails in a modern ES module.

## 8. Design question

> You're writing a small **date-formatting library** that should run in browsers, Node, Deno and edge runtimes.

In MY-NOTES.md: which kinds of APIs may your library use, and which must it avoid? How would you **test** that it really works in every host?

## 9. Short assessment

1. Engine vs host vs runtime, in one sentence each.
2. Name the engine in Chrome, Firefox, Safari and Node.
3. Is `console.log` part of ECMAScript? Who defines it?
4. Why does `document.title` crash in Node?
5. What does `globalThis` solve?
6. Which of these exist in Node 24: `fetch`, `window`, `structuredClone`, `process`, `localStorage`?

<details><summary>Answers</summary>

1. An engine executes ECMAScript. A host embeds the engine and adds APIs. The runtime is the whole package (engine + APIs + event loop).
2. V8 · SpiderMonkey · JavaScriptCore · V8.
3. No. It's a host API, defined by the WHATWG Console standard and implemented by both browsers and Node.
4. `document` is a browser (host) API; Node's global object has no `document`.
5. One standard name for the global object in every host (instead of `window` / `global` / `self`).
6. `fetch` ✅, `window` ❌, `structuredClone` ✅, `process` ✅, `localStorage` ❌ (not by default).

</details>

## 10. Reflection

In MY-NOTES.md:

- Explain engine vs host to a 10-year-old using the car analogy or your own.
- Which "JavaScript" thing did you think was part of the language, but isn't?
- What is still fuzzy?

## 🔑 Key words

| Word | Meaning |
|---|---|
| Engine | Executes ECMAScript (V8, SpiderMonkey, JavaScriptCore) |
| Host | Embeds an engine and adds APIs (browser, Node, Deno, Bun) |
| Host API | Anything not in ECMAScript that the host provides |
| Runtime | Engine + host APIs + event loop |
| Global object / `globalThis` | The object holding all global names |
| WHATWG | The group that writes web standards such as HTML, DOM, Fetch and Console |

## ✅ Done when

- [ ] I ran `globals.js` in Node **and** `browser-check.js` in a browser console
- [ ] Both exercises are green
- [ ] Both module gotchas fixed and explained
- [ ] Design question, quiz and reflection in MY-NOTES.md
- [ ] Committed
