/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
  const persons = efficiency.map((e, i) => [e, speed[i]]).sort((a, b) => b[0] - a[0]);
  const pq = new MinPriorityQueue();
  const ll = BigInt;
  const mod = ll(10 ** 9 + 7);
  let [res, sum] = [0n, 0];
  
  for (const [e, s] of persons) {
    sum += s;
    pq.enqueue(s);
    if (pq.size() > k) sum -= pq.dequeue().element;
    
    const curr = ll(sum) * ll(e);
    if (curr > res) res = curr;
  }
  
  return res % mod;
};