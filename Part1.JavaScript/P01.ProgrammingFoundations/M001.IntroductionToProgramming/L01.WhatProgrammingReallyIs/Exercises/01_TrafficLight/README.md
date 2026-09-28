# Exercise 01: Traffic Light

**Goal:** model a real-world thing as a **state machine**.

## Your task

### `nextLight(current)`

Returns the state after `current`: `'green'` → `'yellow'` → `'red'` → `'green'` → …

Anything else → `throw new Error('Unknown light: <value>')`.

```js
nextLight('green')   // → 'yellow'
nextLight('red')     // → 'green'
nextLight('blue')    // 💥 Error: Unknown light: blue
```

### `runLights(start, steps)`

Returns every state visited, **including the starting one**. The array has `steps + 1` items.

```js
runLights('green', 0)  // → ['green']
runLights('green', 4)  // → ['green', 'yellow', 'red', 'green', 'yellow']
```

Use `nextLight` inside `runLights`. Don't repeat the transition rules.

## Check your work

```powershell
node --test
```

<details><summary>Hint 1</summary>

A lookup object makes transitions data instead of logic:
`const NEXT = { green: 'yellow', /* … */ };`

</details>

<details><summary>Hint 2</summary>

`runLights`: start an array with `[start]`, then loop `steps` times, pushing `nextLight(last state)`.

</details>

**Think (MY-NOTES.md):** a real UK traffic light also has *red + amber* before green. How much of your code changes to add it?
