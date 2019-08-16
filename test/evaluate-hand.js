const { equal } = require('assert');
const withThese = require('mocha-each');
const { testCases } = require('./test-cases');
const { evaluateHand } = require('../src/utils/hand-utils');

describe('evaluateHand', () => {
  withThese(testCases).it(
    (hand, rating) =>
      `returns ${rating} with hand: ${hand
        .map(card => `[Rank:${card.rank} - Suit:${card.suit}]`)
        .join(' ')}`,
    (hand, rating) => {
      equal(evaluateHand(hand), rating);
    },
  );
});
