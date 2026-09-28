/**
 * decide(current, target, tolerance = 0.5) → 'heat' | 'cool' | 'idle'
 * Throws TypeError when current or target is not a real number.
 */
export function decide(current, target, tolerance = 0.5) {
  // TODO 1: validate the input
  if (
    typeof current !== "number" ||
    typeof target !== "number" ||
    Number.isNaN(current) ||
    Number.isNaN(target)
  ) {
    throw new TypeError("current and target must be numbers");
  }
  // TODO 2: apply the three rules from README.md
  let state = "idle";
  if (current < target - tolerance) {
    return (state = "heat");
  } else if (current > target + tolerance) {
    return (state = "cool");
  }

  return state;
}
