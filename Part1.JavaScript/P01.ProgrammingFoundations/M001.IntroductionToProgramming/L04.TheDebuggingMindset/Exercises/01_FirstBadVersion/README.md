# Exercise 01: First Bad Version (bisect)

**Goal:** implement the binary-search idea behind `git bisect`, one of the most powerful debugging tools there is.

## The situation

There are versions `1, 2, 3, …, n`. At some point a bug was introduced, and **every version from then on is broken**:

```text
version:  1   2   3   4   5   6   7
broken?   ✅  ✅  ✅  ❌  ❌  ❌  ❌        → the first bad version is 4
```

You get a function `isBad(version)` that tells you whether one version is broken. Calling it is **expensive** (imagine building and testing the whole app), so call it as **few times as possible**.

## Your task

Complete `firstBadVersion(n, isBad)`. It returns the first bad version.

- You may assume version `n` is bad.
- The tests **count** your calls to `isBad`: you must use at most `⌈log₂ n⌉ + 1` calls. Checking each version one by one will fail for big `n`.

```js
firstBadVersion(7, (v) => v >= 4)          // → 4
firstBadVersion(1, (v) => v >= 1)          // → 1
firstBadVersion(1_000_000, (v) => v >= 777_777)  // → 777777, in about 20 calls
```

## Check your work

```powershell
node --test
```

<details><summary>Hint 1</summary>

Keep two numbers: `low` (the first version that *might* be the answer) and `high` (a version you know is bad). Start with `low = 1`, `high = n`.

</details>

<details><summary>Hint 2</summary>

```text
while low < high:
    mid = floor((low + high) / 2)
    if isBad(mid): high = mid       (mid might be the first bad one)
    else:          low = mid + 1    (the first bad one is after mid)
return low
```

Off-by-one errors love binary search. Test it by hand with `n = 2` before running the tests.

</details>
