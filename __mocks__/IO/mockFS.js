const input = `5 5
1 2
1 0
2 2
2 3
NNESEESWNWW`;

const inputWithTwoDigits = `15 15
1 2
1 0
2 2
2 3
NNESEESWNWW`;

const inputWithExtraLine = `${inputWithTwoDigits}\n`;

const inputWithInvalidInstructions = `5 5
1 2
NNEsSEESWNWW`;

const inputWithNoStartingPosition = `5 5
NNESEESWNWW`;

export default {
  'input.txt': input,
  'input_two_digits.txt': inputWithTwoDigits,
  'input_with_extra_line.txt': inputWithExtraLine,
  'invalid_insturctions.txt': inputWithInvalidInstructions,
  'no_starting_position.txt': inputWithNoStartingPosition,
};
