/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  const minutes = timePoints
    .map((time) => getMinutes(time))
    .sort((a, b) => a - b);
  const total = 24 * 60;
  const n = minutes.length;
  let min = minutes[0] + total - minutes[n - 1];

  for (let i = 1; i < n; i++) {
    min = Math.min(min, minutes[i] - minutes[i - 1]);
  }

  return min;
};

const getMinutes = (time) =>
  time.split(":").reduce((acc, curr, i) => acc + (!i ? +curr * 60 : +curr), 0);
