# Exercise 02: Thermostat

**Goal:** turn a *spoken* rule into a *precise* algorithm. That's the core skill of programming.

## The spoken rule

> "Heat the room when it's too cold, cool it when it's too hot, otherwise leave it alone. Don't flip-flop over tiny differences."

## The precise rule (the algorithm)

`decide(current, target, tolerance = 0.5)` returns:

| Condition | Result |
|---|---|
| `current < target - tolerance` | `'heat'` |
| `current > target + tolerance` | `'cool'` |
| otherwise (within tolerance, **including exactly at the edge**) | `'idle'` |

If `current` or `target` is not a number (or is `NaN`), throw a `TypeError`.

```js
decide(18, 21)        // → 'heat'
decide(21.4, 21)      // → 'idle'
decide(20.5, 21)      // → 'idle'   (exactly at the edge)
decide(25, 21)        // → 'cool'
decide(22, 21, 2)     // → 'idle'   (custom tolerance)
decide('hot', 21)     // 💥 TypeError
```

## Check your work

```powershell
node --test
```

<details><summary>Hint</summary>

`typeof x === 'number'` checks the type, but `typeof NaN` is also `'number'`! Use `Number.isNaN(x)` as well.

</details>

**Think (MY-NOTES.md):** why does the tolerance exist? What would happen to a real heater without it? (Search for "hysteresis".)
