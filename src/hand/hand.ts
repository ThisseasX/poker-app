import {
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
} from 'lodash/fp';
import { Dictionary } from 'lodash';

// @ts-ignore
const mapWithIndex = map.convert({ cap: false });
const maxInARow = (cards: Card[]) =>
  flow(
    map('rank'),
    uniq,
    sortBy(identity),
    mapWithIndex((x: number, i: number) => x - i),
    groupBy(identity),
    groupBy('length'),
    keys,
    map(toNumber),
    sortBy(identity),
    last,
  )(cards);

interface Card {
  id: number;
  rank: number;
  suit: number;
}

type CardGroup = Card[];

type Grouping<T> = Dictionary<T[]>;

class Hand {
  private ranks: Grouping<Card>;
  private suits: Grouping<Card>;
  private rankTimes: Grouping<CardGroup>;
  private suitTimes: Grouping<CardGroup>;
  private ranksInARow: number[];

  constructor(private cards: Card[]) {
    this.ranks = groupBy<Card>('rank')(cards);
    this.suits = groupBy<Card>('suit')(cards);
    this.rankTimes = groupBy<CardGroup>('length')(this.ranks);
    this.suitTimes = groupBy<CardGroup>('length')(this.suits);
    this.ranksInARow = maxInARow(cards);
  }

  hasSameRank = (n: number) =>
    flow(
      get([n, 'length']),
      defaultTo(0),
    )(this.rankTimes);

  hasSameSuit = (n: number) =>
    flow(
      get([n, 'length']),
      defaultTo(0),
    )(this.suitTimes);

  hasInARow = (n: number) => lte(n)(this.ranksInARow);

  hasAce = () =>
    flow(
      find((card: Card) => card.rank === 14),
      negate(isUndefined),
    )(this.cards);
}

const h = new Hand([
  { id: 9, rank: 10, suit: 1 },
  { id: 10, rank: 11, suit: 1 },
  { id: 11, rank: 12, suit: 1 },
  { id: 12, rank: 13, suit: 2 },
  { id: 13, rank: 13, suit: 2 },
  { id: 13, rank: 13, suit: 2 },
]);

console.log(h.hasInARow(5));

export { Hand, Card };
