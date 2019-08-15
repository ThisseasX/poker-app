const { equal } = require('assert');
const withThese = require('mocha-each');
const { rate } = require('..');

describe('rate', () => {
  withThese([
    [
      [
        { id: 9, rank: 10, suit: 1 },
        { id: 10, rank: 11, suit: 1 },
        { id: 11, rank: 12, suit: 1 },
        { id: 12, rank: 13, suit: 1 },
        { id: 13, rank: 14, suit: 1 },
      ],
      'ROYAL_FLUSH',
    ],
    [
      [
        { id: 8, rank: 9, suit: 1 },
        { id: 9, rank: 10, suit: 1 },
        { id: 10, rank: 11, suit: 1 },
        { id: 11, rank: 12, suit: 1 },
        { id: 12, rank: 13, suit: 1 },
      ],
      'STRAIGHT_FLUSH',
    ],
    [
      [
        { id: 6, rank: 7, suit: 1 },
        { id: 19, rank: 7, suit: 2 },
        { id: 32, rank: 7, suit: 3 },
        { id: 45, rank: 7, suit: 4 },
        { id: 8, rank: 9, suit: 1 },
      ],
      'FOUR_OF_A_KIND',
    ],
    [
      [
        { id: 6, rank: 7, suit: 1 },
        { id: 19, rank: 7, suit: 2 },
        { id: 32, rank: 7, suit: 3 },
        { id: 8, rank: 9, suit: 1 },
        { id: 21, rank: 9, suit: 2 },
      ],
      'FULL_HOUSE',
    ],
    [
      [
        { id: 1, rank: 2, suit: 1 },
        { id: 2, rank: 3, suit: 1 },
        { id: 5, rank: 6, suit: 1 },
        { id: 7, rank: 8, suit: 1 },
        { id: 12, rank: 13, suit: 1 },
      ],
      'FLUSH',
    ],
    [
      [
        { id: 1, rank: 2, suit: 1 },
        { id: 2, rank: 3, suit: 1 },
        { id: 16, rank: 4, suit: 2 },
        { id: 30, rank: 5, suit: 3 },
        { id: 44, rank: 6, suit: 4 },
      ],
      'STRAIGHT',
    ],
    [
      [
        { id: 6, rank: 7, suit: 1 },
        { id: 19, rank: 7, suit: 2 },
        { id: 32, rank: 7, suit: 3 },
        { id: 8, rank: 9, suit: 1 },
        { id: 9, rank: 10, suit: 1 },
      ],
      'THREE_OF_A_KIND',
    ],
    [
      [
        { id: 1, rank: 2, suit: 1 },
        { id: 14, rank: 2, suit: 2 },
        { id: 32, rank: 7, suit: 3 },
        { id: 45, rank: 7, suit: 4 },
        { id: 34, rank: 9, suit: 3 },
      ],
      'TWO_PAIR',
    ],
    [
      [
        { id: 1, rank: 2, suit: 1 },
        { id: 14, rank: 2, suit: 2 },
        { id: 15, rank: 3, suit: 2 },
        { id: 29, rank: 4, suit: 3 },
        { id: 43, rank: 5, suit: 4 },
      ],
      'PAIR',
    ],
    [
      [
        { id: 1, rank: 2, suit: 1 },
        { id: 16, rank: 4, suit: 2 },
        { id: 31, rank: 6, suit: 3 },
        { id: 46, rank: 8, suit: 4 },
        { id: 48, rank: 10, suit: 4 },
      ],
      'HIGH_CARD',
    ],
  ]).it(
    (hand, rating) =>
      `returns ${rating} with hand: ${hand
        .map(card => `[Rank:${card.rank} - Suit:${card.suit}]`)
        .join(' ')}`,
    (hand, rating) => {
      equal(rate(hand), rating);
    },
  );
});
