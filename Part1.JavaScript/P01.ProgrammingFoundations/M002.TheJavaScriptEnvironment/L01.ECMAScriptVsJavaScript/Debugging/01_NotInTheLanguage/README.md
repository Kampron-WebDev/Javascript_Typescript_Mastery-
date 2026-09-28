# Debugging 01: Not in the Language

A teammate wrote two helpers "from memory":

```js
lastItem(['a', 'b', 'c'])        // should be 'c'
flattenOnce([1, [2, 3], [4]])    // should be [1, 2, 3, 4]
```

Both crash with `TypeError: … is not a function`. There are **2 bugs**: each calls a method that **isn't part of ECMAScript**. One was only ever a library method; the other was a real proposal that got renamed.

## Your task

1. `node --test`, then read the error messages.
2. Look up the correct standard methods on **MDN** (search "MDN Array"). Don't guess!
3. Fix both. In MY-NOTES.md, write where each wrong name probably came from, and the lesson.

<details><summary>Hint</summary>

Lesson 01 tells the story of one of them ("smooshgate"). For the other: which ES2022 method accepts **negative** indexes?

</details>
