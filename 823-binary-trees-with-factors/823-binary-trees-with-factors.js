/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
  arr.sort((a, b) => a - b);
  const MOD = 1e9 + 7;
  const map = {};
  
  for (let num1 of arr) {
    map[num1] = 1;
    for (let num2 of arr) {
      const k = num1 / num2;
      if (!(num1 % num2) && map[k]) map[num1] = (map[num1] + map[num2] * map[k]) % MOD;
    }
  }
  
  return Object.values(map).reduce((a, b) => a + b) % MOD;
};