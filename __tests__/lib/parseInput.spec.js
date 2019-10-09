import parseInput from '../../src/lib/parseInput';

const testData = `5 5
1 2
1 0
2 2
2 3
NNESEESWNWW`;

const testDataWithInvalidPositions = `5 5
10 2
1 0
2 20
2 3
NNESEESWNWW`;

const expected = {
  roomSize: [5, 5],
  startPosition: [1, 2],
  dustyPositions: [[1, 0], [2, 2], [2, 3]],
  instructions: 'NNESEESWNWW',
};
describe('parseInput', () => {
  it('returns a correct object', () => {
    const subject = parseInput(testData);
    expect(subject).toMatchObject(expected);
  });

  it('deals with invalid positions', () => {
    expect(() => parseInput(testDataWithInvalidPositions)).toThrow();
  });
});
