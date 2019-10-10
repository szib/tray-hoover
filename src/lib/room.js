import { clamp } from 'ramda';

const positionValidator = roomSize => position => {
  const [rX, rY] = roomSize;
  const [pX, pY] = position;
  return pX === clamp(0, rX - 1, pX) && pY === clamp(0, rY - 1, pY);
};

export default positionValidator;
