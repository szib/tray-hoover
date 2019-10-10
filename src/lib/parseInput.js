import { nth, pipe, drop, dropLast } from 'ramda';

import positionValidator from './room';

const breakToLines = str => str.split('\n');
const convertToCoord = str => str.split(' ').map(x => +x);
const convertToCoords = arr => arr.map(coord => convertToCoord(coord));

const getRoomSize = pipe(
  breakToLines,
  nth(0),
  convertToCoord,
);
const getStartPosition = pipe(
  breakToLines,
  nth(1),
  convertToCoord,
);
const getDustySpots = pipe(
  breakToLines,
  drop(2),
  dropLast(1),
  convertToCoords,
);
const getInstructions = pipe(
  breakToLines,
  nth(-1),
);

const parseInput = input => {
  const roomSize = getRoomSize(input);
  const isInTheRoom = positionValidator(roomSize);

  const startPosition = getStartPosition(input);
  const dustyPositions = getDustySpots(input);
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
    instructions: getInstructions(input),
  };
};

export default parseInput;
