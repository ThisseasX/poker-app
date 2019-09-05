const {
  flow,
  groupBy,
  sortBy,
  find,
  isUndefined,
  negate,
  map,
  has,
  identity,
} = require('lodash/fp');
const mapWithIndex = map.convert({ cap: false });

class Hand {
  constructor(hand) {
    this.hand = hand;
  }

  hasSameSuit(n) {
    return flow(
      map('suit'),
      groupBy(identity),
      groupBy('length'),
      has(n),
    )(this.hand);
  }

  hasSameRank(n) {
    return flow(
      map('rank'),
      groupBy(identity),
      groupBy('length'),
      has(n),
    )(this.hand);
  }

  hasInARow(n) {
    return flow(
      map('rank'),
      sortBy(identity),
      mapWithIndex((x, i) => x - i),
      groupBy(identity),
      groupBy('length'),
      has(n),
    )(this.hand);
  }

  hasAce() {
    return flow(
      find(card => card.rank === 14),
      negate(isUndefined),
    )(this.hand);
  }
}

const h = new Hand([
  { id: 9, rank: 10, suit: 1 },
  { id: 10, rank: 11, suit: 1 },
  { id: 11, rank: 12, suit: 1 },
  { id: 12, rank: 13, suit: 1 },
  { id: 13, rank: 14, suit: 1 },
]);

console.log(h.hasAce());
