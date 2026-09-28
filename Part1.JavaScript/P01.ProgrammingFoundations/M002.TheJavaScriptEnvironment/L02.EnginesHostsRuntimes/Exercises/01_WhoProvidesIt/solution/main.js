export const PROVIDERS = {
  language: ['Array', 'Object', 'String', 'Number', 'Promise', 'Map', 'Set', 'JSON', 'Math', 'Symbol', 'BigInt', 'globalThis', 'parseInt'],
  'shared-host': ['console', 'setTimeout', 'setInterval', 'fetch', 'URL', 'TextEncoder', 'structuredClone', 'queueMicrotask'],
  browser: ['window', 'document', 'localStorage', 'alert', 'HTMLElement'],
  node: ['process', 'Buffer', 'global', 'require', '__dirname'],
};

export function providerOf(name) {
  for (const [category, names] of Object.entries(PROVIDERS)) {
    if (names.includes(name)) return category;
  }
  return 'unknown';
}
