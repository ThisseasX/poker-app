const { groupBy } = require('../generic-utils');

const groupBySuit = hand => groupBy(hand, 'suit');
const groupByRank = hand => groupBy(hand, 'rank');
const getHighCard = hand =>
  hand.sort((a, b) => a.rank - b.rank)[hand.length - 1];

const parseHand = hand => {
  if (hand.length !== 5) {
    throw Error('Invalid hand length');
  }

  if (hand.some(card => card.rank < 2 || card.rank > 14)) {
    throw Error('Invalid card rank');
  }

  return {
    hand,
    suits: Object.entries(groupBySuit(hand)),
    ranks: Object.entries(groupByRank(hand)),
    highCard: getHighCard(hand),
  };
};

module.exports = {
  groupBySuit,
  groupByRank,
  getHighCard,
  parseHand,
};
