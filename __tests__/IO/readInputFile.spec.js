import '@babel/polyfill';
import path from 'path';

import {
  readInputFile,
  validateInput,
  getInput,
} from '../../src/IO/readInputFile';

const file = path.join(__dirname, 'input.txt');

const expectedContent = `5 5
1 2
1 0
2 2
2 3
NNESEESWNWW`;

const expectedContent2 = `15 15
1 2
1 0
2 2
2 3
NNESEESWNWW`;

const wrongInstructions = `5 5
1 2
NNEsSEESWNWW`;

const wrongInstructions2 = `5 5
NNESEESWNWW`;

describe('readInputFile', () => {
  it('reads input.txt', async () => {
    const data = await readInputFile(file);
    expect(data).toEqual(expectedContent);
  });
  it('throws if cannot open the file', async () => {
    expect.assertions(1);
    await expect(readInputFile('i_am_not_here.txt')).rejects.toThrow();
  });
});

describe('validateInput', () => {
  describe('goes on happy path', () => {
    it('for the example in the task description', () => {
      expect(validateInput(expectedContent)).toBeTruthy();
    });
    it('if it has two digit numbers', () => {
      expect(validateInput(expectedContent2)).toBeTruthy();
    });
  });
  describe('does not go on happy path', () => {
    it('for invalid character in the instructions', () => {
      expect(() => validateInput(wrongInstructions)).toThrow();
    });
    it('for not enough pair of numbers', () => {
      expect(() => validateInput(wrongInstructions2)).toThrow();
    });
  });
});

describe('getInput', () => {
  it('parse the fle', async () => {
    expect.assertions(1);
    const content = await getInput(file);
    expect(content).toEqual(expectedContent);
  });
});
