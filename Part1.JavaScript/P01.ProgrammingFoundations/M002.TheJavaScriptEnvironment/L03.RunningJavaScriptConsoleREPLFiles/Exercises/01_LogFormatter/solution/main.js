const LEVELS = ['debug', 'info', 'warn', 'error'];

export function formatLog(level, message, date = new Date()) {
  const normalized = level.toLowerCase();
  if (!LEVELS.includes(normalized)) throw new Error(`Unknown level: ${level}`);
  return `[${date.toISOString()}] ${normalized.toUpperCase().padEnd(5)} ${message}`;
}
