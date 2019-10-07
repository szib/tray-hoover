import '@babel/polyfill';

import {
  readInputFile,
  validateInput,
  getInput,
} from '../../src/IO/readInputFile';

import mockFs from 'mock-fs';
import mockFsConfig from '../../__mocks__/IO/mockFS';

describe('file IO', () => {
  beforeAll(() => {
    mockFs(mockFsConfig);
  });

  afterAll(() => {
    mockFs.restore();
  });

  describe('readInputFile', () => {
    it('reads input.txt', async () => {
      const data = await readInputFile('input.txt');
      expect(data).toEqual(mockFsConfig['input.txt']);
    });
    it('throws if cannot open the file', async () => {
      expect.assertions(1);
      await expect(readInputFile('i_am_not_here.txt')).rejects.toThrow();
    });
  });

  describe('validateInput', () => {
    describe('goes on happy path', () => {
      it('for the example in the task description', () => {
        expect(validateInput(mockFsConfig['input.txt'])).toBeTruthy();
      });
      it('if it has two digit numbers', () => {
        expect(
          validateInput(mockFsConfig['input_two_digits.txt']),
        ).toBeTruthy();
      });
    });
    describe('does not go on happy path', () => {
      it('for invalid character in the instructions', () => {
        expect(() =>
          validateInput(mockFsConfig['invalid_insturctions.txt']),
        ).toThrow();
      });
      it('for not enough pair of numbers', () => {
        expect(() =>
          validateInput(mockFsConfig['no_starting_position.txt']),
        ).toThrow();
      });
    });
  });

  describe('getInput', () => {
    it('parse the fle', async () => {
      expect.assertions(1);
      const content = await getInput('input_two_digits.txt');
      expect(content).toEqual(mockFsConfig['input_two_digits.txt']);
    });
  });
});
