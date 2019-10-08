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

export const finalPosition = path => last(path).join(' ');
