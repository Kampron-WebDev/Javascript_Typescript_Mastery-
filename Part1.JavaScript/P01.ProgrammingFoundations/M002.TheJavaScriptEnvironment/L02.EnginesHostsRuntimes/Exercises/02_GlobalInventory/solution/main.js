import { providerOf } from '../../01_WhoProvidesIt/solution/main.js';

export function inventory(globalObject, names) {
  const result = { language: [], 'shared-host': [], browser: [], node: [], unknown: [], missing: [] };
  for (const name of names) {
    if (globalObject[name] === undefined) result.missing.push(name);
    else result[providerOf(name)].push(name);
  }
  return result;
}
