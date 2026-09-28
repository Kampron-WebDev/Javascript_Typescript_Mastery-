# Exam Coding 01: Elevator Controller (60 points)

Write a **pure** state-machine function: `elevator(state, event)` returns the **next** state. It must **never modify** the state it receives.

## State

```js
{ floor: 0, status: 'idle', target: null }
// status is one of: 'idle' | 'moving' | 'doors-open'
```

## Events and rules

| Event | Current status | Result |
|---|---|---|
| `{ type: 'call', floor: n }` | `idle`, and `n === floor` | status → `'doors-open'` |
| | `idle`, and `n !== floor` | status → `'moving'`, target → `n` |
| | `moving` or `doors-open` | **ignored** (state unchanged) |
| `{ type: 'tick' }` | `moving` | floor moves **one** step toward the target; if it reaches the target, status → `'doors-open'` and target → `null` |
| | anything else | unchanged |
| `{ type: 'close' }` | `doors-open` | status → `'idle'` |
| | anything else | unchanged |
| any other `type` | | throw an `Error` containing `Unknown event` |

**Safety rule:** the elevator must never be `moving` with its doors open. (Your design should make that impossible.)

```js
let s = { floor: 0, status: 'idle', target: null };
s = elevator(s, { type: 'call', floor: 2 });  // { floor: 0, status: 'moving', target: 2 }
s = elevator(s, { type: 'tick' });            // { floor: 1, status: 'moving', target: 2 }
s = elevator(s, { type: 'tick' });            // { floor: 2, status: 'doors-open', target: null }
s = elevator(s, { type: 'close' });           // { floor: 2, status: 'idle', target: null }
```

```powershell
node --test
```
