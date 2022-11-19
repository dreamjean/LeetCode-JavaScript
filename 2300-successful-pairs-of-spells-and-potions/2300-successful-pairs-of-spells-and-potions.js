/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  potions.sort((a, b) => a - b);
  
  return spells.map((spell) => getSuccessfulIndex(spell, success, potions));
};

const getSuccessfulIndex = (num, target, potions) => {
  const n = potions.length;
  let [lo, hi] = [0, n - 1];
  
  while (lo <= hi) {
    const mid = (lo + hi) >>> 1;
    if (num * potions[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  
  return n - lo;
}