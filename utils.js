const createDeck = () =>
  Array(52)
    .fill()
    .map((_, i) => ({
      id: i + 1,
      rank: (i % 13) + 2,
      suit: Math.ceil(((i + 1) / 52) * 4),
    }));

const groupBy = (arr, key) =>
  arr.reduce(
    (groups, item) => ({
      ...groups,
      [item[key]]: [...(groups[item[key]] || []), item],
    }),
    {},
  );

const groupBySuit = cards => groupBy(cards, 'suit');
const groupByRank = cards => groupBy(cards, 'rank');
const getHighCard = cards =>
  cards.sort((a, b) => a.rank - b.rank)[cards.length - 1];

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
  createDeck,
  parseHand,
};
