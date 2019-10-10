import fs from 'fs';
import util from 'util';

import { trim, pipeP } from 'ramda';

import FileError from './FileError';

const readFile = util.promisify(fs.readFile);

export const validateInput = fileContent => {
  const regex = /^([1-9]\d* [1-9]\d*\n){1}(\d{1,} \d{1,}\n){1,}[NEWS]*$/;
  if (!fileContent.match(regex)) {
    throw new FileError('Invalid file format');
  } else {
    return fileContent;
  }
};

export const readInputFile = async file => {
  try {
    const data = await readFile(file, 'utf8');
    return data;
  } catch (error) {
    throw new FileError('Cannot read file');
  }
};

export const getInput = pipeP(
  readInputFile,
  trim,
  validateInput,
);
