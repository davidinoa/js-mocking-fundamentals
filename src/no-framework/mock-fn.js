const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

function fn(impl) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };

  mockFn.mock = { calls: [] };

  return mockFn;
}

const originalGetWinner = utils.getWinner;
utils.getWinner = fn((p1, p2) => p1);

const winner = thumbWar('David', 'Daniel');
assert.strictEqual(winner, 'David');
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['David', 'Daniel'],
  ['David', 'Daniel'],
]);

// cleanup
utils.getWinner = originalGetWinner;
