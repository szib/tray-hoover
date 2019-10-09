import positionValidator from './room';

function convertToCoord(str) {
  return str.split(' ').map(x => +x);
}

function parseInput(input) {
  const lines = input.split(`\n`);
  const instructions = lines.pop();

  const roomSize = convertToCoord(lines.shift());
  const isInTheRoom = positionValidator(roomSize);

  const startPosition = convertToCoord(lines.shift());
  const dustyPositions = lines.map(s => convertToCoord(s));

  [startPosition, ...dustyPositions].forEach(pos => {
    if (!isInTheRoom(pos))
      throw new Error(
        'Invalid position found. All positions must be in the room.',
      );
  });

  return {
    roomSize,
    startPosition,
    dustyPositions,
    instructions,
  };
}

export default parseInput;
