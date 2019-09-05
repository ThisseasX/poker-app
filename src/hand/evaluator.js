const rankings = {
  ROYAL_FLUSH: hand => isStraightFlush(hand) && hand.highCard.rank === 14,

  STRAIGHT_FLUSH: hand => isStraight(hand) && isFlush(hand),

  FOUR_OF_A_KIND: ({ ranks }) =>
    ranks.some(([_, cardsPerRank]) => cardsPerRank.length == 4),

  FULL_HOUSE: ({ ranks }) => ranks.length == 2,

  FLUSH: ({ suits }) => suits.length === 1,

  STRAIGHT: ({ hand }) =>
    hand
      .map(card => card.rank)
      .sort((a, b) => a - b)
      .every((_, i, ranks) => i === 0 || ranks[i] - 1 === ranks[i - 1]),

  THREE_OF_A_KIND: ({ ranks }) =>
    ranks.some(([_, cardsPerRank]) => cardsPerRank.length === 3),

  TWO_PAIR: ({ ranks }) => ranks.length == 3,

  PAIR: ({ ranks }) => ranks.length == 4,

  HIGH_CARD: () => true,
};

const handEvaluator = hand => ({});
