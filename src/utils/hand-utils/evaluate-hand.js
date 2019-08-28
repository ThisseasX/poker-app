const handRankings = require('./hand-rankings');
const { parseHand } = require('./hand-utils');
const { flow, entries, head, find, replace, toUpper } = require('lodash/fp');

const transformName = name =>
  flow(
    replace(/is/, ''),
    replace(/(?<=\w)([A-Z])/g, '_$1'),
    toUpper,
  )(name);

const evaluateHand = hand => {
  const handStatistics = parseHand(hand);

  return flow(
    entries,
    find(([, ranking]) => ranking(handStatistics)),
    head,
    transformName,
  )(handRankings);
};

module.exports = {
  evaluateHand,
};
