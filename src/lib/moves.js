const move = delta => from => {
  return from.reduce(
    (result, value, idx) => (result = [...result, value + delta[idx]]),
    [],
  );
};

const moveNorth = move([0, 1]);
const moveSouth = move([0, -1]);
const moveEast = move([1, 0]);
const moveWest = move([-1, 0]);

const moves = {
  N: moveNorth,
  S: moveSouth,
  E: moveEast,
  W: moveWest,
};

export default moves;
