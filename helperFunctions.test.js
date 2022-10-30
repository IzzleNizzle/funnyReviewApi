const { getRandomInt } = require("./helperFunctions")


test.each([
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
])('Random number between two given numbers', (a, b) => {
  expect(getRandomInt(a, b)).toBeLessThanOrEqual(b)
  expect(getRandomInt(a, b)).toBeGreaterThanOrEqual(a)
})
