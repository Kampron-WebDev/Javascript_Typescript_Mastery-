// Order matters: check the IMITATORS (Deno, Bun) before the thing they imitate (Node).
const DETECTORS = [
  ['deno', (g) => g.Deno?.version?.deno],
  ['bun', (g) => g.Bun?.version],
  ['node', (g) => g.process?.versions?.node],
];

export function describeEnvironment(g = globalThis) {
  let host = 'unknown';
  let version = null;

  for (const [name, detect] of DETECTORS) {
    const found = detect(g);
    if (found) {
      host = name;
      version = found;
      break;
    }
  }
  if (host === 'unknown' && g.window && g.document) host = 'browser';

  return {
    host,
    version,
    hasDOM: typeof g.document?.createElement === 'function',
    hasFetch: typeof g.fetch === 'function',
  };
}
