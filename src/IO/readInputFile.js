import fs from 'fs';
import util from 'util';

import { trim, pipeP } from 'ramda';

import FileError from './FileError';

const readFile = util.promisify(fs.readFile);

export const validateInput = fileContent => {
  const regex = /^(\d{1,} \d{1,}\n){2,}[NEWS]*$/;
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
