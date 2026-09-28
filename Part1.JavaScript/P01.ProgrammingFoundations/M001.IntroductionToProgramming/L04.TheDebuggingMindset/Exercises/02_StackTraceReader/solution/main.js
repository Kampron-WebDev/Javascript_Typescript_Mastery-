export function topFrame(stack) {
  const frameLine = stack
    .split('\n')
    .map((line) => line.trim())
    .find((line) => line.startsWith('at '));
  if (!frameLine) return null;

  const body = frameLine.slice(3); // drop "at "
  let fn = '<anonymous>';
  let location = body;

  if (body.endsWith(')')) {
    const open = body.lastIndexOf('(');
    fn = body.slice(0, open).trim();
    location = body.slice(open + 1, -1);
  }

  // Paths and URLs can contain ':' too, so use the LAST two colons.
  const lastColon = location.lastIndexOf(':');
  const secondLastColon = location.lastIndexOf(':', lastColon - 1);

  return {
    fn,
    file: location.slice(0, secondLastColon),
    line: Number(location.slice(secondLastColon + 1, lastColon)),
    column: Number(location.slice(lastColon + 1)),
  };
}
