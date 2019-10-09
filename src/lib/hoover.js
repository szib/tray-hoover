import { intersection, last } from 'ramda';

import moves from './moves';
import positionValidator from './room';

export const calculatePath = config => {
  let hooverPosition = config.startPosition;
  const instructions = config.instructions.split('');

  const isInTheRoom = positionValidator(config.roomSize);

  return instructions.reduce(
    (hooverPath, instruction) => {
      const newPosition = moves[instruction](hooverPosition);
      if (isInTheRoom(newPosition)) {
        hooverPath = [...hooverPath, newPosition];
        hooverPosition = newPosition;
      }
      return hooverPath;
    },
    [hooverPosition],
  );
};

export const countRemovedDust = (config, hooverPath) =>
  intersection(config.dustyPositions, hooverPath).length;

export const getFinalPosition = path => last(path).join(' ');

export const run = config => {
  const hooverPath = calculatePath(config);
  const finalPosition = getFinalPosition(hooverPath);
  const cleanedPositions = countRemovedDust(config, hooverPath);

  return `${finalPosition}\n${cleanedPositions}`;
};
