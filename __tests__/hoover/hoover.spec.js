import * as Hoover from '../../src/hoover/hoover';

describe('calculate path', () => {
  it('calculates the correct path', () => {
    const config = {
      roomSize: [5, 5],
      startPosition: [1, 2],
      dustyPositions: [[1, 0], [2, 2], [2, 3]],
      instructions: 'NESEESWNWW',
    };
    const expected = [
      [1, 2],
      [1, 3],
      [2, 3],
      [2, 2],
      [3, 2],
      [4, 2],
      [4, 1],
      [3, 1],
      [3, 2],
      [2, 2],
      [1, 2],
    ];
    expect(Hoover.calculatePath(config)).toEqual(expected);
  });

  it('should stay in the room', () => {
    const config = {
      roomSize: [3, 3],
      startPosition: [0, 0],
      dustyPositions: [],
      instructions: 'NNNNNNNEEEEEESSSSSSWWWWWWW',
    };
    const expected = [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2],
      [2, 2],
      [2, 1],
      [2, 0],
      [1, 0],
      [0, 0],
    ];
    expect(Hoover.calculatePath(config)).toEqual(expected);
  });
});
