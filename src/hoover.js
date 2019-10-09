import '@babel/polyfill';
import path from 'path';

import { getInput } from './IO/readInputFile';
import parseInput from './lib/parseInput';
import { run } from './lib/hoover';
import helpText from './helpText';

(async function() {
  try {
    const file = path.join(__dirname, 'input.txt');
    const fileContent = await getInput(file);
    const config = parseInput(fileContent);
    const output = run(config);
    console.log(output);
  } catch (error) {
    console.log(error.toString());
    console.log(helpText);
  }
})();
