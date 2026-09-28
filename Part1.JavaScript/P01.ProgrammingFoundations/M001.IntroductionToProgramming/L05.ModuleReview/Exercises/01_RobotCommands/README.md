# No-Hints Challenge: Robot Commands

A robot lives on a grid. Its **state** is `{ x, y, facing }`, where `facing` is `'N'`, `'E'`, `'S'` or `'W'`.
North is `y + 1` and east is `x + 1`.

Complete `runRobot(commands, start)`. `commands` is a string of single letters:

| Command | Effect |
|---|---|
| `F` | Move forward one square in the direction it's facing |
| `B` | Move backward one square (facing doesn't change) |
| `L` | Turn left 90° (N → W → S → E → N) |
| `R` | Turn right 90° (N → E → S → W → N) |

- `start` defaults to `{ x: 0, y: 0, facing: 'N' }`.
- Return the **final state** as a new object. **Don't modify** the `start` object you were given.
- Any other character → throw a `SyntaxError` with the message `Unknown command "<char>" at position <index>`.
- Spaces are **not** allowed either (they're unknown commands).

```js
runRobot('')              // → { x: 0, y: 0, facing: 'N' }
runRobot('FFRFF')         // → { x: 2, y: 2, facing: 'E' }
runRobot('LLF')           // → { x: 0, y: -1, facing: 'S' }
runRobot('F', { x: 5, y: 5, facing: 'W' })  // → { x: 4, y: 5, facing: 'W' }
runRobot('FX')            // 💥 SyntaxError: Unknown command "X" at position 1
```

```powershell
node --test
```

**Afterwards, in MY-NOTES.md:** which parts of your solution are *data* (tables) and which are *logic*? Could you add a `U` (U-turn) command by changing only data?
