/**
 * summarizeScores([72, 50, 91, 38]) → { count: 4, average: 62.8, highest: 91, passed: 3 }
 * summarizeScores([])               → { count: 0, average: 0, highest: null, passed: 0 }
 * Pass mark: 50 or more. Average rounded to 1 decimal.
 *
 * ⚠️ 3 bugs. Hypothesis first, then the debugger, then the fix.
 */
export function summarizeScores(scores) {
  let total = 0;
  let highest = 0;
  let passed = 0;

  for (let i = 1; i < scores.length; i++) {
    total += scores[i];
    if (scores[i] > highest) highest = scores[i];
    if (scores[i] > 50) passed++;
  }

  const average = Math.round((total / scores.length) * 10) / 10;
  return { count: scores.length, average, highest, passed };
}
