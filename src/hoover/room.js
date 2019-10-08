const positionValidator = roomSize => position => {
  return position[0] >= 0 &&
    position[1] >= 0 &&
    position[0] < roomSize[0] &&
    position[1] < roomSize[1]
    ? true
    : false;
};

export default positionValidator;
