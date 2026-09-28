# Debugging 01: Print vs Return

A beginner wrote two helpers and "tested" them by running the file. The terminal showed the right answers!

```js
add(2, 3)              // should RETURN 5
fullName('Ama', 'Mensah')  // should RETURN 'Ama Mensah'
```

But the real tests fail: both functions give their callers `undefined`. There are **2 bugs**, each a slightly different version of the same misunderstanding.

## Your task

1. `node --test`: what `actual` value did each function give back? (The tests quietly capture anything printed, so they can check that nothing is.) Then run `node -e "import('./main.js').then(m => console.log('got:', m.add(2, 3)))"` to see the print **and** the returned value side by side.
2. Fix both functions. They should **return** their results and print **nothing**.
3. In MY-NOTES.md: what does `console.log(...)` itself return? Why does `return console.log(x)` not help?
