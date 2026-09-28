# Debugging 01: Module Gotchas

`dataFile(name)` should return the **absolute path** of a file inside a `data` folder *next to `main.js`*:

```js
dataFile('students.json')  // → 'C:\\…\\01_ModuleGotchas\\data\\students.json'
```

The code was copied from an old Node tutorial and crashes immediately. There are **2 bugs**, both caused by the same fact: this course's files are **ES modules** (see `"type": "module"` in the course's `package.json`), and old tutorials were written for **CommonJS**.

## Your task

1. `node --test` and read the error: `require is not defined in ES module scope`.
2. Fix it, run again, and meet the second error.
3. Fix that too. In MY-NOTES.md: why do `require` and `__dirname` exist in CommonJS files but not in ES modules? Who provides them?

<details><summary>Hint 1</summary>

The ES-module way to load a built-in module: `import path from 'node:path';` (at the top of the file).

</details>

<details><summary>Hint 2</summary>

In ES modules, information about the current module lives on `import.meta`. Node 20.11+ provides `import.meta.dirname` and `import.meta.filename`.

</details>
