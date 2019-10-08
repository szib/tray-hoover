import '@babel/polyfill';
import path from 'path';

import { getInput } from './IO/readInputFile';
import parseInput from './hoover/parseInput';
import {
  calculatePath,
  countRemovedDust,
  finalPosition,
} from './hoover/hoover';

(async function() {
  try {
    const file = path.join(__dirname, 'input.txt');
    const fileContent = await getInput(file);
    const config = parseInput(fileContent);
    const hooverPath = calculatePath(config);
    const cleaned = countRemovedDust(config, hooverPath);
    console.log(finalPosition(hooverPath));
    console.log(cleaned);
  } catch (error) {
    console.log(error.toString());
  }
})();
