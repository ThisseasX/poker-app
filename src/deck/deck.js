const createDeck = () =>
  Array(52)
    .fill()
    .map((_, i) => ({
      id: i + 1,
      rank: (i % 13) + 2,
      suit: Math.ceil(((i + 1) / 52) * 4),
    }));

module.exports = {
  createDeck,
};
