const assert = require('assert');
const thumbwar = require('../thumb-war');
const utils = require('../utils');

const originalGetWinner = utils.getWinner;
utils.getWinner = (p1, p2) => p1;

const winner = thumbwar('David', 'Daniel');
assert.strictEqual(winner, 'David');

utils.getWinner = originalGetWinner;
