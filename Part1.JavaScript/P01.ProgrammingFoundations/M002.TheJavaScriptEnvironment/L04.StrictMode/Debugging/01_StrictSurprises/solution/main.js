export const DEFAULTS = Object.freeze({ retries: 3, timeoutMs: 1000 });

export function makeConfig(overrides = {}) {
  // Bug 1: `const config = DEFAULTS` made a second NAME for the same frozen object.
  // Strict mode: TypeError on the write. Sloppy mode: the write was silently ignored,
  // so every override was quietly lost. Fix: build a NEW object.
  return { ...DEFAULTS, ...overrides };
}

export function countRetries(logLines) {
  let count = 0;
  for (const line of logLines) {
    // Bug 2: `cuont = count + 1` assigned to a misspelled, undeclared name.
    // Strict mode: ReferenceError. Sloppy mode: it silently created a GLOBAL `cuont`,
    // `count` never changed, and the function always returned 0.
    // (Note: `cuont++` would throw in BOTH modes, because it must READ cuont first.
    //  Only a plain assignment silently creates a global.)
    if (line.includes('retry')) count = count + 1;
  }
  return count;
}
