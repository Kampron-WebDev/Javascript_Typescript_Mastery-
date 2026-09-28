// ⚠️ 2 bugs that sloppy mode used to hide.

export const DEFAULTS = Object.freeze({ retries: 3, timeoutMs: 1000 });

/** makeConfig({ retries: 5 }) → { retries: 5, timeoutMs: 1000 }. DEFAULTS must not change. */
export function makeConfig(overrides = {}) {
  const config = DEFAULTS;
  for (const key of Object.keys(overrides)) {
    config[key] = overrides[key];
  }
  return config;
}

/** countRetries(['retry 1', 'ok', 'retry 2']) → 2 */
export function countRetries(logLines) {
  let count = 0;
  for (const line of logLines) {
    if (line.includes('retry')) cuont = count + 1;
  }
  return count;
}
