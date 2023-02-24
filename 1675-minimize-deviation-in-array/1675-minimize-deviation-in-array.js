/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function(nums) {
  const pq = new MaxPriorityQueue();
  
  for (let num of nums) {
    if (num & 1) num *= 2;
    pq.enqueue(num);
  }
  
  let ans = pq.front().element - pq.back().element;
  
  while (!(pq.front().element & 1)) {
    pq.enqueue(pq.dequeue().element / 2);
    ans = Math.min(ans, pq.front().element - pq.back().element);
  }
  
  return ans;
};