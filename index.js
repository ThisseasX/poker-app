const { parseHand } = require('./utils');
const rankings = require('./hand-rankings');

const transformRankingName = name =>
  name
    .replace(/is/, '')
    .replace(/(?<=\w)([A-Z])/g, `_$1`)
    .toUpperCase();

const hand = [
  { id: 1, rank: 2, suit: 1 },
  { id: 14, rank: 2, suit: 2 },
  { id: 15, rank: 3, suit: 2 },
  { id: 29, rank: 4, suit: 3 },
  { id: 43, rank: 5, suit: 4 },
];

const rate = hand => {
  let result = { name: 'HIGH_CARD', quality: 0 };

  const handStatistics = parseHand(hand);

  const transformedRankings = Object.entries(rankings).map(
    ([name, ranking]) => [transformRankingName(name), ranking],
  );

  transformedRankings.some(
    ([name, ranking], i, arr) =>
      ranking(handStatistics) &&
      (result = {
        name,
        quality: arr.length - i,
      }),
  );

  return result;
};

console.log(rate(hand));

module.exports = { rate };
