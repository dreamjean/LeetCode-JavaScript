/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function (plantTime, growTime) {
  const plants = plantTime
    .map((p, i) => [p, growTime[i]])
    .sort((a, b) => a[1] - b[1]);
  let ans = 0;

  plants.forEach(([p, g]) => (ans = Math.max(ans, g) + p));

  return ans;
};
