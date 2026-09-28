# Lesson 01: What Programming Really Is

[🏠 Course](../../../../README.md) · [Module 001](../README.md) · [Next ➡](../L02.ValuesExpressionsStatements/README.md)

**Module 001 · Lesson 01** · ⏱️ about 1.5–2 hours · Needs: [Orientation](../../../../00.Orientation/README.md)

---

## 1. Concept

🧸 **Simple version:**
Imagine a robot chef that is **incredibly fast** but **completely literal**. Tell it "make tea" and it freezes: *make what? how? with which cup?* Tell it:

1. Fill the kettle with 500 ml of water.
2. Switch the kettle on.
3. Wait until the water reaches 100 °C.
4. …

…and it makes perfect tea, a million times in a row, never getting bored.

**Programming is writing instructions precise enough for that robot.**

🎓 **Precise version:**

| Term | Meaning | Tea example |
|---|---|---|
| **Program** | A precise set of instructions a computer executes | The whole recipe |
| **Source code** | The human-readable text of a program | The recipe written down |
| **Algorithm** | A finite, unambiguous sequence of steps that solves a problem | "Boil, pour, steep 3 min, remove bag" |
| **Value / data** | A piece of information the program works with | `500` (ml), `'green'` (tea type) |
| **State** | What the program *remembers* between steps | "The kettle is currently on" |
| **Input** | Data coming *into* the program | "The user chose green tea" |
| **Output** | Data or effects coming *out* | "Print: Your tea is ready" |

## 2. Why it exists

Computers are fast, but they have **no understanding at all**. Humans are smart, but slow and inconsistent.
Programming is the bridge: we do the *thinking* once, write it down precisely, and the computer does the *doing* billions of times.

The hard part is not typing code. It's the **precision**: deciding exactly what should happen in every situation, including the weird ones (no water in the kettle? user typed "banana" for the number of cups?).

## 3. Internal mechanics: the shape of every program

Almost every program, from a calculator to Netflix, has this shape:

```text
         ┌─────────────────────────────┐
INPUT ──►│  PROCESS (the algorithm)    │──► OUTPUT
         │        ▲         │          │
         │        └─ STATE ◄┘          │   state = what it remembers
         └─────────────────────────────┘
```

- **Without state**, the same input always gives the same output: `add(2, 3)` is always `5`. That's easy to reason about and test.
- **With state**, the output depends on the input *and* on what happened before. Press the lift button: whether the doors open depends on where the lift *currently* is.

A program that moves between a fixed set of states is called a **state machine**. A traffic light is the classic example:

```text
   ┌──────────┐  timer   ┌──────────┐  timer   ┌──────────┐
   │  GREEN   │ ───────► │  YELLOW  │ ───────► │   RED    │
   └──────────┘          └──────────┘          └────┬─────┘
        ▲                                           │ timer
        └───────────────────────────────────────────┘
```

You'll build exactly this in today's exercise. Many bugs in real apps are *state bugs*: the program ends up in a state nobody planned for (for example, "logged out but still showing the dashboard").

## 4. Simple examples

```powershell
cd Examples
node tea.js            # input → process → output
node tea.js green 3    # different input, different output
node state.js          # same call, different results: that's state
```

**Predict first:** before running `state.js`, read it and write down what you think it prints.

## 5. Real-world examples

| Program | Input | State | Output |
|---|---|---|---|
| Vending machine | Coins, button presses | Credit so far, stock | Snack, change |
| Login page | Email + password | Logged in or not, failed attempts | Dashboard, or an error |
| Shopping cart | "Add to cart" clicks | Items in the cart | Updated total |
| A web server | HTTP requests | Database contents | HTML / JSON responses |

In a web app the most important state lives in a **database**, so that it survives restarts and is shared by all servers. You'll meet that idea many times in the Full-Stack course.

## 6. Coding exercises

| # | Exercise | Skill |
|---|---|---|
| 1 | [Traffic Light](Exercises/01_TrafficLight/README.md) | Modelling state and transitions |
| 2 | [Thermostat](Exercises/02_Thermostat/README.md) | Turning a spoken rule into a precise algorithm |

## 7. Debugging challenge

[Vending Machine](Debugging/01_VendingMachine/README.md): **2 bugs**, both about precision. The computer did *exactly* what it was told.

## 8. Design question

> Describe a **microwave oven** as a program.

In MY-NOTES.md:

1. What are its **inputs**? Its **outputs**?
2. List its **states** (e.g. idle, running…) and draw the arrows between them.
3. Which combinations must be **impossible** (hint: door open + heating)? How would you make sure the program can never reach them?

## 9. Short assessment

1. In your own words: program vs algorithm?
2. What is state? Give an everyday example not mentioned above.
3. Why are programs *without* state easier to test?
4. What is a state machine?
5. "The computer made a mistake." Why do programmers rarely believe this sentence?

<details><summary>Answers</summary>

1. An algorithm is the precise *idea* (the steps); a program is that idea *written in a language* a computer can execute.
2. What a program remembers between steps, e.g. a TV remembers its current channel and volume.
3. The same input always gives the same output, so a test needs no setup of "what happened before".
4. A program that is always in exactly one of a fixed set of states, and moves between them on specific events.
5. Computers execute instructions literally and (almost) perfectly. Nearly every "mistake" is an instruction that said something different from what the programmer *meant*.

</details>

## 10. Reflection

In MY-NOTES.md:

- Explain "state" to a 10-year-old using a game they know.
- Think of an app you use daily. What is one state bug you've seen in it?
- What is still fuzzy?

## 🔑 Key words

| Word | Meaning |
|---|---|
| Program / source code | Instructions for a computer / their written text |
| Algorithm | Precise, finite steps that solve a problem |
| Value | A single piece of data (`42`, `'hi'`, `true`) |
| State | Data a program remembers over time |
| Input / output | Data in / data or effects out |
| State machine | A system that moves between a fixed set of states |

## ✅ Done when

- [ ] I predicted, then ran, both examples
- [ ] Both exercises are green
- [ ] Vending machine fixed, with both bugs explained
- [ ] Design question, quiz and reflection in MY-NOTES.md
- [ ] Committed
