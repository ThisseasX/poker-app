const { groupByRank, groupBySuit, getHighCard } = require('./utils');
const {
  isRoyalFlush,
  isStraightFlush,
  isFourOfAKind,
  isFullHouse,
  isFlush,
  isStraight,
  isThreeOfAKind,
  isTwoPair,
  isPair,
} = require('./hand-rankings');

const hand = [
  { id: 22, rank: 2, suit: 1 },
  { id: 51, rank: 8, suit: 1 },
  { id: 7, rank: 6, suit: 1 },
  { id: 11, rank: 3, suit: 2 },
  { id: 37, rank: 4, suit: 1 },
];

const rate = hand => {
  if (hand.length !== 5) {
    throw Error('Invalid hand length');
  }

  if (hand.some(x => x.rank < 2 || x.rank > 14)) {
    throw Error('Invalid card rank');
  }

  const suits = Object.entries(groupBySuit(hand));
  const ranks = Object.entries(groupByRank(hand));
  const highCard = getHighCard(hand);

  const handStatistics = {
    hand,
    suits,
    ranks,
    highCard,
  };

  switch (true) {
    case isRoyalFlush(handStatistics):
      console.log('ROYAL_FLUSH');
      break;
    case isStraightFlush(handStatistics):
      console.log('STRAIGHT_FLUSH');
      break;
    case isFourOfAKind(handStatistics):
      console.log('FOUR_OF_A_KIND');
      break;
    case isFullHouse(handStatistics):
      console.log('FULL_HOUSE');
      break;
    case isFlush(handStatistics):
      console.log('FLUSH');
      break;
    case isStraight(handStatistics):
      console.log('STRAIGHT');
      break;
    case isThreeOfAKind(handStatistics):
      console.log('THREE_OF_A_KIND');
      break;
    case isTwoPair(handStatistics):
      console.log('TWO_PAIR');
      break;
    case isPair(handStatistics):
      console.log('PAIR');
      break;
    default:
      console.log('HIGH_CARD');
  }

  console.log(highCard);
};

rate(hand);

module.exports = rate;
