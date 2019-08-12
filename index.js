const cards = Array(52)
  .fill()
  .map((_, i) => ({
    id: i + 1,
    value: (i % 13) + 1,
    suit: Math.ceil(((i + 1) / 52) * 4),
  }));

console.log(cards);
