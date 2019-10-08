import parseInput from '../../src/hoover/parseInput';

const testData = `5 5
1 2
1 0
2 2
2 3
NESEESWNWW`;

describe('parseInput', () => {
  let subject;
  beforeEach(() => {
    subject = parseInput(testData);
  });

  it('returns a correct object', () => {
    const expected = {
      roomSize: [5, 5],
      startPosition: [1, 2],
      dustyPositions: [[1, 0], [2, 2], [2, 3]],
      instructions: 'NESEESWNWW',
    };
    expect(subject).toMatchObject(expected);
  });
});
