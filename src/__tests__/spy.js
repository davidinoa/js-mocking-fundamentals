const thumbWar = require('../thumb-war');
const utils = require('../utils');

test('returns winner', () => {
  jest.spyOn(utils, 'getWinner');
  utils.getWinner.mockImplementation((p1, p2) => p1);

  const winner = thumbWar('David', 'Daniel');

  expect(winner).toBe('David');

  expect(utils.getWinner.mock.calls).toEqual([
    ['David', 'Daniel'],
    ['David', 'Daniel'],
  ]);

  // cleanup
  utils.getWinner.mockRestore();
});
