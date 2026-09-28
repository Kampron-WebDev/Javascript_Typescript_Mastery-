# Debugging 01: Vending Machine

A snack costs `price` cents. Each time a coin goes in, `insertCoin(credit, coin, price)` returns the new situation:

```js
insertCoin(0, 50, 100)   // → { credit: 50, dispensed: false, change: 0 }   not enough yet
insertCoin(50, 50, 100)  // → { credit: 0, dispensed: true, change: 0 }     exact money
insertCoin(80, 50, 100)  // → { credit: 0, dispensed: true, change: 30 }    too much, so give change
```

Customers are angry: paying the **exact** price does nothing, and overpaying gives them **negative** change.

There are **2 bugs**. In both, the computer did exactly what the code said, but the code didn't say what the programmer meant.

## Your task

1. `node --test`, then read `expected` vs `actual`.
2. Fix both bugs (small changes only).
3. In MY-NOTES.md, write each bug as: *spoken rule → what the code actually said → fix.*

<details><summary>Hint 1</summary>

"Enough money" means the credit is **at least** the price. Which comparison operator says "at least"?

</details>

<details><summary>Hint 2</summary>

If I've put in 130 and the price is 100, how much should come back? Now read the change calculation out loud.

</details>
