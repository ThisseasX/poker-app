const { equal } = require('assert');
const { rate } = require('..');

describe('rate', () => {
  withThese([
    [[7, 8, 9, 10, 11], true],
    [[11, 10, 9, 8, 7], true],
    [[11, 9, 10, 8, 7], true],
    [[7, 8, 9, 12, 10, 11], true],
    [[7, 8, 5, 6, 10, 11, 9], true],
    [[7, 8, 9, 10, 10], false],
    [[7, 7, 8, 9, 10], false],
    [[7, 8, 9, 10, 12], false],
    [[7, 8, 9, 10, 9], false],
    [[6, 8, 9, 10, 11], false],
    [[7, 8, 8, 9, 10], false],
  ]).it(
    (nums, valid) => `[${nums.join(', ')}] - [${valid ? 'valid' : 'invalid'}]`,
    (nums, valid) => {
      equal(validateSequence(nums), valid);
    },
  );
});
