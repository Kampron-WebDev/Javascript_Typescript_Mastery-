function outcome(body) {
  try {
    new Function(body)(); // create (parse) + call (run)
    return 'ok';
  } catch (err) {
    return err.name; // parse-time and run-time errors both land here
  }
}

export function compareModes(code) {
  return {
    sloppy: outcome(code),
    strict: outcome(`"use strict";\n${code}`),
  };
}
