function convertToCoord(str) {
  return str.split(' ').map(x => +x);
}

function parseInput(input) {
  const lines = input.split(`\n`);
  const instructions = lines.pop();

  const roomSize = convertToCoord(lines.shift());
  const startPosition = convertToCoord(lines.shift());

  const dustyPositions = lines.map(s => convertToCoord(s));

  return {
    roomSize,
    startPosition,
    dustyPositions,
    instructions,
  };
}

export default parseInput;
