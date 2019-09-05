const { flow, groupBy, sortBy, last, some, entries } = require('lodash/fp');

const parseHand = hand => {
  if (some(card => card.rank < 2 || card.rank > 14)(hand)) {
    throw Error('Invalid card rank');
  }

  return {
    hand,
    suits: flow(
      groupBy('suit'),
      entries,
    )(hand),
    ranks: flow(
      groupBy('rank'),
      entries,
    )(hand),
    highCard: flow(
      sortBy('rank'),
      last,
    )(hand),
  };
};

module.exports = {
  parseHand,
};
