# No-Hints Challenge: Describe the Environment

Complete `describeEnvironment(g = globalThis)`. It inspects a global object and returns:

```js
{
  host: 'deno' | 'bun' | 'node' | 'browser' | 'unknown',
  version: string | null,   // the host's version, or null if it has none to report
  hasDOM: boolean,          // true if g.document.createElement is a function
  hasFetch: boolean,        // true if g.fetch is a function
}
```

How to recognise each host:

| Host | Sign | `version` |
|---|---|---|
| Deno | `g.Deno.version.deno` exists | that value |
| Bun | `g.Bun.version` exists | that value |
| Node | `g.process.versions.node` exists | that value |
| Browser | `g.window` **and** `g.document` exist | `null` |
| Unknown | none of the above | `null` |

⚠️ **The trap:** Deno and Bun *imitate* Node for compatibility, so they also have `process.versions.node`! Your function must not mistake them for Node.

It must **never crash**, even for `describeEnvironment({})`.

```js
describeEnvironment()   // in Node 24 → { host: 'node', version: '24.19.0', hasDOM: false, hasFetch: true }
```

```powershell
node --test
```
