/** 'green' → 'yellow' → 'red' → 'green'. Throws for unknown lights. */
const lights = ["green", "yellow", "red"];

export function nextLight(current) {
  // TODO
  let index = lights.indexOf(current);

  if (index !== -1) {
    index = (index + 1) % lights.length;
    return lights[index];
  } else {
    throw new Error(`Unknown light: ${current}`);
  }
}

// console.log(nextLight("Blue"));

/** Every state visited, starting with `start`: an array of length steps + 1. */
export function runLights(start, steps) {
  // TODO: use nextLight
  let visited = [start];

  for (let i = 0; i < steps; i++) {
    visited.push(nextLight(visited[visited.length - 1]));
  }

  return visited;
}

// console.log(runLights("green", 4));
