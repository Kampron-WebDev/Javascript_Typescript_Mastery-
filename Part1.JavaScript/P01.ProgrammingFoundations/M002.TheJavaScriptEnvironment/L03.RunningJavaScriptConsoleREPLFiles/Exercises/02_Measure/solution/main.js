export function measure(fn, ...args) {
  const start = performance.now(); // monotonic, sub-millisecond clock
  const result = fn(...args); // if this throws, the error simply propagates
  const ms = performance.now() - start;
  return { result, ms };
}
