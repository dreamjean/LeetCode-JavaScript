/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
  const pq = new MaxPriorityQueue();
  let ans = 0;
  
  piles.forEach((num) => pq.enqueue(num));
  
  while (k) {
    const num = Math.ceil(pq.dequeue().element / 2);
    pq.enqueue(num);
    k--;
  }
  
  while (!pq.isEmpty()) {
    ans += pq.dequeue().element;
  }
  
  return ans;
};