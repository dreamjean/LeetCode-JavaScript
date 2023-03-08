/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let [lo, hi] = [1, Math.max(...piles)];  
  
  while (lo < hi) {
    const mid = (lo + hi) >>> 1;
    if (smallerThen(mid, h, piles)) hi = mid;
    else lo = mid + 1;
  }
  
  return lo;
};

const smallerThen = (target, h, piles) => piles.reduce((acc, curr) => acc + Math.ceil(curr / target), 0) <= h;