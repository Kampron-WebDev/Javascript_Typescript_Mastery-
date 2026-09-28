const isRealNumber = (x) => typeof x === 'number' && !Number.isNaN(x);

export function decide(current, target, tolerance = 0.5) {
  if (!isRealNumber(current) || !isRealNumber(target)) {
    throw new TypeError('current and target must be numbers');
  }
  if (current < target - tolerance) return 'heat';
  if (current > target + tolerance) return 'cool';
  return 'idle';
}

// Why tolerance (hysteresis)? Without it, a room hovering around 21.0 °C would
// switch the heater on/off many times a minute, wearing it out. A "dead zone"
// around the target keeps the system stable.
