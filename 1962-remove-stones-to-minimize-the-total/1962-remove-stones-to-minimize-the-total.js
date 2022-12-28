/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
  const max = Math.max(...piles);
  const cnt = new Array(max + 1).fill(0);
  let sum = 0;
  
  piles.forEach((pile) => cnt[pile]++);
  
  for (let i = max; i >= 0; i--) {
    while (cnt[i]-- > 0) {
      k-- > 0 ? cnt[Math.ceil(i / 2)]++ : sum += i;
    }
  }
  
  return sum;
};