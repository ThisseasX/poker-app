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

module.exports = {
  createDeck,
  groupBySuit,
  groupByRank,
  getHighCard,
};
