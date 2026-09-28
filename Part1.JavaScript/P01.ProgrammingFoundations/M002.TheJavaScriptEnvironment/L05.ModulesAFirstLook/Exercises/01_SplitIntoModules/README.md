# Exercise 01: Split into Modules

**Goal:** write two modules with the right mix of **named** and **default** exports, so the finished `main.js` works *without changing it*.

## The files

```text
01_SplitIntoModules/
├── main.js    ← DONE: don't edit it. Read its imports: they are your specification!
├── money.js   ← TODO
└── cart.js    ← TODO
```

`main.js` contains:

```js
import createCart, { addItem, cartTotal } from './cart.js';
import { formatMoney } from './money.js';
```

So `cart.js` needs a **default** export plus two **named** exports, and `money.js` needs one named export.

## What each function does

### `money.js`

- `formatMoney(cents)` → `'$12.34'`. Negative amounts: `formatMoney(-500)` → `'-$5.00'`.

### `cart.js`

- **default export** `createCart()` → a new, empty cart: `{ items: [] }`.
- `addItem(cart, item)` → a **new** cart with `item` added at the end. It must **not** modify the cart it was given.
- `cartTotal(cart)` → the sum of `item.price × item.quantity` in **cents** (prices are already in cents).

Then `checkout` in `main.js` works:

```js
checkout([{ name: 'Pen', price: 125, quantity: 4 }, { name: 'Book', price: 999, quantity: 1 }])
// → '$14.99'
```

## Check your work

```powershell
node --test
```

<details><summary>Hint: a new cart without modifying the old one</summary>

```js
return { ...cart, items: [...cart.items, item] };
```

The `...` spread copies the existing properties/items into a brand-new object/array. You'll study it deeply in Phase 5.

</details>
