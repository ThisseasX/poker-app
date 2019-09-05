const {
  flow,
  groupBy,
  sortBy,
  last,
  some,
  keys,
  entries,
  map,
  has,
  identity,
} = require('lodash/fp');
const mapWithIndex = map.convert({ cap: false });

class Hand {
  constructor(hand) {
    this.hand = hand;
  }

  hasInARow(n) {
    return flow(
      map('rank'),
      sortBy(identity),
      mapWithIndex((x, i) => x - i),
      groupBy(identity),
      groupBy('length'),
      has(n)
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

console.log(h.hasInARow(5));
