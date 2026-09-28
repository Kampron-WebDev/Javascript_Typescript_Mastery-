export function summarizeScores(scores) {
  // Bug 3: with no scores, 0 / 0 is NaN and "highest: 0" is a lie. Handle it explicitly.
  if (scores.length === 0) return { count: 0, average: 0, highest: null, passed: 0 };

  let total = 0;
  let highest = scores[0];
  let passed = 0;

  // Bug 1: the loop started at 1 and skipped the first score. Arrays start at 0.
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
    if (scores[i] > highest) highest = scores[i];
    // Bug 2: "50 or more" is >=, not >.
    if (scores[i] >= 50) passed++;
  }

  const average = Math.round((total / scores.length) * 10) / 10;
  return { count: scores.length, average, highest, passed };
}
