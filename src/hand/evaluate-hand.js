const { flow, entries, first, find } = require('lodash/fp');

const rankings = {
  ROYAL_FLUSH: hand => hand.hasInARow(5) && hand.hasSameSuit(5) && hand.hasAce(),
  STRAIGHT_FLUSH: hand => hand.hasInARow(5) && hand.hasSameSuit(5),
  FOUR_OF_A_KIND: hand => hand.hasSameRank(4),
  FULL_HOUSE: hand => hand.hasSameRank(3) && hand.hasSameRank(2),
  FLUSH: hand => hand.hasSameSuit(5),
  STRAIGHT: hand => hand.hasInARow(5),
  THREE_OF_A_KIND: hand => hand.hasSameRank(3),
  TWO_PAIR: hand => hand.hasSameRank(2) >= 2,
  PAIR: hand => hand.hasSameRank(2),
  HIGH_CARD: hand => hand.hasSameRank(1) >= 5,
};

const evaluateHand = hand =>
  flow(
    entries,
    find(([_, ranking]) => ranking(hand)),
    first,
  )(rankings);

module.exports = { evaluateHand };
