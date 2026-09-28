# Exercise 02: Expression Tree Evaluator

**Goal:** evaluate an expression **tree** exactly the way the engine does: leaves first, then upwards.

## The tree format

`2 + 3 * 4` becomes this tree of plain objects:

```js
{
  type: 'binary', operator: '+',
  left:  { type: 'number', value: 2 },
  right: {
    type: 'binary', operator: '*',
    left:  { type: 'number', value: 3 },
    right: { type: 'number', value: 4 },
  },
}
```

There are two node types:

| `type` | Fields | Evaluates to |
|---|---|---|
| `'number'` | `value` | the value itself |
| `'binary'` | `operator` (`+ - * /`), `left`, `right` | evaluate `left`, evaluate `right`, then apply the operator |

## Your task

Complete `evaluate(node)`.

- Unknown node types or operators → throw an `Error`.
- Division by zero → throw a `RangeError`.

```js
evaluate({ type: 'number', value: 7 })   // → 7
evaluate(treeFor_2_plus_3_times_4)       // → 14
```

## Check your work

```powershell
node --test
```

<details><summary>Hint 1</summary>

A `'binary'` node contains two smaller trees. What function do you already have that can evaluate a tree? Call it on `node.left` and `node.right`. A function calling itself is **recursion**; you met it in C++.

</details>

<details><summary>Hint 2</summary>

```js
if (node.type === 'number') return node.value;
if (node.type === 'binary') {
  const l = evaluate(node.left);
  const r = evaluate(node.right);
  // switch on node.operator …
}
```

</details>

**Think (MY-NOTES.md):** draw the tree for `(1 + 2) * (3 - 4)`. Where did the parentheses go? (They're gone! The *shape* of the tree remembers them.)
