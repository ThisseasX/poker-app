const { equal } = require('assert');
const withThese = require('mocha-each');
const { testCases } = require('./test-cases/hand-test-cases');
const { Hand, evaluateHand } = require('../src/hand');

describe('evaluateHand', () => {
  withThese(testCases).it(
    (hand, ranking) =>
      `returns ${ranking} with hand: ${hand
        .map(card => `[Rank:${card.rank} - Suit:${card.suit}]`)
        .join(' ')}`,
    (hand, ranking) => {
      equal(evaluateHand(new Hand(hand)), ranking);
    },
  );
});
