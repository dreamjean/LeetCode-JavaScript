/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
  let [lo, hi] = [1, time[0] * totalTrips];
  
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (graterThanTotal(time, mid, totalTrips)) hi = mid;
    else lo = mid + 1;
  }
  
  return lo;
};

const graterThanTotal = (time, mid, totalTrips) => {
  let sum = 0;
  
  for (let t of time) sum += Math.floor(mid / t);
  
  return sum >= totalTrips;
}