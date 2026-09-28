// The transitions are DATA. Adding UK "red+amber" is one line in this table.
const NEXT = {
  green: 'yellow',
  yellow: 'red',
  red: 'green',
};

export function nextLight(current) {
  if (!Object.hasOwn(NEXT, current)) throw new Error(`Unknown light: ${current}`);
  return NEXT[current];
}

export function runLights(start, steps) {
  const visited = [start];
  for (let i = 0; i < steps; i++) {
    visited.push(nextLight(visited[visited.length - 1]));
  }
  return visited;
}
