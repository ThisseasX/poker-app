const {
  flow,
  groupBy,
  sortBy,
  some,
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

const hasSame = (n, group) => {
  return flow(
    get([n, 'length']),
    defaultTo(0),
  )(group);
}

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
    return hasSame(n, this.rankTimes);
  }

  hasSameSuit(n) {
    return hasSame(n, this.suitTimes);
  }

  hasInARow(n) {
    return lte(n, this.ranksInARow);
  }

  hasAce() {
    return some(card => card.rank === 14, this.cards);
  }
}

module.exports = { Hand };
