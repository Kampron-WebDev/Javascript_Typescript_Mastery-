# Exercise 01: Log Formatter

**Goal:** produce clean, consistent log lines, the first step toward professional logging.

## Your task

Complete `formatLog(level, message, date = new Date())`. It returns (does **not** print!) a string:

```text
[2026-09-26T10:00:00.000Z] WARN  disk almost full
```

Rules:

- The timestamp is `date.toISOString()` in square brackets.
- The level is **uppercase** and padded with spaces to **5 characters**, so messages line up: `DEBUG`, `INFO `, `WARN `, `ERROR`.
- Allowed levels (any capitalisation): `debug`, `info`, `warn`, `error`. Anything else → throw an `Error` containing `Unknown level`.
- Exactly one space between the padded level and the message.

```js
const d = new Date('2026-09-26T10:00:00Z');
formatLog('warn', 'disk almost full', d)  // → '[2026-09-26T10:00:00.000Z] WARN  disk almost full'
formatLog('ERROR', 'db down', d)          // → '[2026-09-26T10:00:00.000Z] ERROR db down'
formatLog('info', 'started', d)           // → '[2026-09-26T10:00:00.000Z] INFO  started'
formatLog('loud', 'hi', d)                // 💥 Error: Unknown level: loud
```

## Check your work

```powershell
node --test
```

<details><summary>Hint</summary>

`'info'.toUpperCase().padEnd(5)` → `'INFO '`.

</details>
