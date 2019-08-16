const { evaluateHand } = require('./utils');

const hand = [
  { id: 9, rank: 10, suit: 1 },
  { id: 10, rank: 11, suit: 1 },
  { id: 11, rank: 12, suit: 1 },
  { id: 12, rank: 13, suit: 1 },
  { id: 13, rank: 14, suit: 1 },
];

console.log(evaluateHand(hand));
