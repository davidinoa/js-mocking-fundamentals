const thumbWar = require('../thumb-war');
const utils = require('../utils');

jest.mock('../utils.js', () => {
  return { getWinner: jest.fn((p1, p2) => p1) };
});

test('returns winner', () => {
  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler');

  expect(winner).toBe('Kent C. Dodds');
  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler'],
  ]);

  // cleanup
  utils.getWinner.mockReset();
});
