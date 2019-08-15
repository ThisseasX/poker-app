const { parseHand } = require('./utils');
const rankings = require('./hand-rankings');

const transformRankingName = name =>
  name
    .replace(/is/, '')
    .replace(/(?<=\w)([A-Z])/g, `_$1`)
    .toUpperCase();

const rate = hand => {
  let result = 'HIGH_CARD';

  const handStatistics = parseHand(hand);

  const transformedRankings = Object.entries(rankings).map(
    ([name, ranking]) => [transformRankingName(name), ranking],
  );

  transformedRankings.some(
    ([name, ranking]) => ranking(handStatistics) && (result = name),
  );

  return result;
};

module.exports = { rate };
