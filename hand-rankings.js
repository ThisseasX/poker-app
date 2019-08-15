const validateSequence = cards =>
  cards
    .map(x => x.rank)
    .sort((a, b) => a - b)
    .every((_, i, ranks) => i === 0 || ranks[i] - 1 === ranks[i - 1]);

const isRoyalFlush = stats =>
  isFlush(stats) && isStraight(stats) && stats.highCard.rank === 14;

const isStraightFlush = stats => isStraight(stats) && isFlush(stats);

const isFourOfAKind = ({ ranks }) =>
  ranks.some(([_, cardsPerRank]) => cardsPerRank.length >= 4);

const isFullHouse = ({ ranks }) => ranks.length == 2;

const isFlush = ({ suits }) => suits.length === 1;

const isStraight = ({ hand }) => validateSequence(hand);

const isThreeOfAKind = ({ ranks }) =>
  ranks.some(([_, cardsPerRank]) => cardsPerRank.length === 3);

const isTwoPair = ({ ranks }) => ranks.length == 3;

const isPair = ({ ranks }) => ranks.length == 4;

module.exports = {
  isRoyalFlush,
  isStraightFlush,
  isFourOfAKind,
  isFullHouse,
  isFlush,
  isStraight,
  isThreeOfAKind,
  isTwoPair,
  isPair,
};
