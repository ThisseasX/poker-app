import { Hand } from './hand';

const rankings = {
  ROYAL_FLUSH: (hand: Hand) => hand.hasInARow(5) && hand.hasSameSuit(5) && hand.hasAce(),
  STRAIGHT_FLUSH: (hand: Hand) => hand.hasInARow(5) && hand.hasSameSuit(5),
  FOUR_OF_A_KIND: (hand: Hand) => hand.hasSameRank(4),
  FULL_HOUSE: (hand: Hand) => hand.hasSameRank(3) && hand.hasSameRank(2),
  FLUSH: (hand: Hand) => hand.hasSameSuit(5),
  STRAIGHT: (hand: Hand) => hand.hasInARow(5),
  THREE_OF_A_KIND: (hand: Hand) => hand.hasSameRank(3),
  TWO_PAIR: (hand: Hand) => hand.hasSameRank(2) >= 2,
  PAIR: (hand: Hand) => hand.hasSameRank(2),
  HIGH_CARD: (hand: Hand) => hand.hasSameRank(1) >= 5,
};

// const handEvaluator = hand => ({});
