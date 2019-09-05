const {
  flow,
  groupBy,
  sortBy,
  find,
  isUndefined,
  negate,
  map,
  identity,
  keys,
  toNumber,
  uniq,
  get,
  last,
  defaultTo,
  lte,
} = require('lodash/fp');

// @ts-ignore
const mapWithIndex = map.convert({ cap: false });
const maxInARow = cards =>
  flow(
    map('rank'),
    uniq,
    sortBy(identity),
    mapWithIndex((x, i) => x - i),
    groupBy(identity),
    groupBy('length'),
    keys,
    map(toNumber),
    sortBy(identity),
    last,
  )(cards);

class Hand {
  constructor(cards) {
    this.cards = cards;
    this.ranks = groupBy('rank')(cards);
    this.suits = groupBy('suit')(cards);
    this.rankTimes = groupBy('length')(this.ranks);
    this.suitTimes = groupBy('length')(this.suits);
    this.ranksInARow = maxInARow(cards);
  }

  hasSameRank(n) {
    return flow(
      get([n, 'length']),
      defaultTo(0),
    )(this.rankTimes);
  }

  hasSameSuit(n) {
    return flow(
      get([n, 'length']),
      defaultTo(0),
    )(this.suitTimes);
  }

  hasInARow(n) {
    return lte(n)(this.ranksInARow);
  }

  hasAce() {
    return flow(
      find(card => card.rank === 14),
      negate(isUndefined),
    )(this.cards);
  }
}

module.exports = { Hand };
