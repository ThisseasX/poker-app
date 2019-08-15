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

const rate = hand => {
  if (hand.length !== 5) {
    throw Error('Invalid hand length');
  }

  if (hand.some(card => card.rank < 2 || card.rank > 14)) {
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
      return 'ROYAL_FLUSH';
    case isStraightFlush(handStatistics):
      return 'STRAIGHT_FLUSH';
    case isFourOfAKind(handStatistics):
      return 'FOUR_OF_A_KIND';
    case isFullHouse(handStatistics):
      return 'FULL_HOUSE';
    case isFlush(handStatistics):
      return 'FLUSH';
    case isStraight(handStatistics):
      return 'STRAIGHT';
    case isThreeOfAKind(handStatistics):
      return 'THREE_OF_A_KIND';
    case isTwoPair(handStatistics):
      return 'TWO_PAIR';
    case isPair(handStatistics):
      return 'PAIR';
    default:
      return 'HIGH_CARD';
  }
};

module.exports = { rate };
