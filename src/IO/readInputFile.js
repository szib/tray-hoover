import fs from 'fs';
import util from 'util';

import { trim } from 'ramda';

import FileError from './FileError';

const readFile = util.promisify(fs.readFile);

export function validateInput(fileContent) {
  const regex = /^(\d{1,} \d{1,}\n){2,}[NEWS]*$/;
  if (!fileContent.match(regex)) {
    throw new FileError('Invalid file format');
  } else {
    return fileContent;
  }
}

export async function readInputFile(file) {
  try {
    const data = await readFile(file, 'utf8');
    return trim(data);
  } catch (error) {
    throw new FileError('Cannot read file');
  }
}

export function getInput(filename) {
  return readInputFile(filename).then(validateInput);
}
