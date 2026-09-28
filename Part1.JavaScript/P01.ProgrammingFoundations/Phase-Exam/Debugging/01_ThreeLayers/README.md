# Exam Debugging 01: Three Layers

`invoiceSummary(lines)` summarises an invoice. All amounts are in **cents**, and tax is **15%**, rounded to the nearest cent:

```js
invoiceSummary([{ price: 1000, quantity: 2 }, { price: 500, quantity: 1 }])
// → { subtotal: 2500, tax: 375, total: 2875 }
```

There are **3 bugs**, one from each layer you studied:

1. a **parse-time** error
2. a **runtime** error (strict mode makes this one loud)
3. a **logic** error (the engine is perfectly happy with it)

## Your task (30 minutes)

Fix all three. In `MY-EXAM.md`, for each bug write: **phase** · **cause** · **how you found it** (which tool / message).
