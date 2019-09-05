const { deepEqual } = require('assert');
const { expectedDeck } = require('./test-cases/deck-test-cases');
const { createDeck } = require('../src/deck');

describe('createDeck', () => {
  it('creates a full deck of 52 unique cards', () => {
    deepEqual(createDeck(), expectedDeck);
  });
});
