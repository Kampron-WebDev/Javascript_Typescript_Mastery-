// DATA: the rules as tables
const LEFT = { N: 'W', W: 'S', S: 'E', E: 'N' };
const RIGHT = { N: 'E', E: 'S', S: 'W', W: 'N' };
const STEP = { N: [0, 1], E: [1, 0], S: [0, -1], W: [-1, 0] };

// LOGIC: one small function per command
const COMMANDS = {
  F: (s) => ({ ...s, x: s.x + STEP[s.facing][0], y: s.y + STEP[s.facing][1] }),
  B: (s) => ({ ...s, x: s.x - STEP[s.facing][0], y: s.y - STEP[s.facing][1] }),
  L: (s) => ({ ...s, facing: LEFT[s.facing] }),
  R: (s) => ({ ...s, facing: RIGHT[s.facing] }),
  // A U-turn would be one more line: U: (s) => ({ ...s, facing: RIGHT[RIGHT[s.facing]] }),
};

export function runRobot(commands, start = { x: 0, y: 0, facing: 'N' }) {
  let state = { ...start }; // a copy, so the caller's object is never modified
  for (let i = 0; i < commands.length; i++) {
    const letter = commands[i];
    if (!Object.hasOwn(COMMANDS, letter)) {
      throw new SyntaxError(`Unknown command "${letter}" at position ${i}`);
    }
    state = COMMANDS[letter](state);
  }
  return state;
}
