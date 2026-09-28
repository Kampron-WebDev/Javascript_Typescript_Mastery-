// INPUT → PROCESS → OUTPUT
// Run me:  node tea.js          or   node tea.js green 3

// ── INPUT: from the command line (with defaults) ──
const type = process.argv[2] ?? 'black';
const cups = Number(process.argv[3] ?? 1);

// ── PROCESS: the algorithm, with a decision in it ──
const steepMinutes = type === 'green' ? 2 : 4; // green tea is more delicate
const waterMl = cups * 250;

const steps = [
  `Fill the kettle with ${waterMl} ml of water`,
  'Switch the kettle on and wait for it to boil',
  `Put ${cups} ${type} tea bag(s) in the pot`,
  'Pour the water',
  `Wait ${steepMinutes} minutes`,
  'Remove the bags and serve',
];

// ── OUTPUT ──
console.log(`☕ Recipe for ${cups} cup(s) of ${type} tea:`);
steps.forEach((step, i) => console.log(`  ${i + 1}. ${step}`));

// Try: node tea.js green banana   ← what happens? What SHOULD happen?
// That's the precision problem: every weird input needs a decision.
