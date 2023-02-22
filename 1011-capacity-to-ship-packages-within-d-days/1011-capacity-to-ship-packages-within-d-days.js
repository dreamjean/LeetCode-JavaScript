/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
  let start = Math.max(...weights);
  let end = weights.reduce((a, b) => a + b);
  
  while (start < end) {
    const mid = (start + end) >>> 1;
    if (!isPossable(weights, mid, days)) start = mid + 1;
    else end = mid;
  }
  
  return start;
};

const isPossable = (weights, mid, days) => {
  let [sum, count] = [0, 1];
  
  weights.forEach((weight) => {
    sum += weight;
    if (sum > mid) {
      count++;
      sum = weight;
    }
  })
  
  return sum <= mid && count <= days; 
}