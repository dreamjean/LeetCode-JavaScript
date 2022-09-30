/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function (quality, wage, k) {
  const persons = quality
    .map((q, i) => [q, wage[i]])
    .sort(([a1, a2], [b1, b2]) => a2 / a1 - b2 / b1);
  const pq = new MaxPriorityQueue();
  let [sum, ans] = [0, Infinity];

  for (const [q, w] of persons) {
    sum += q;
    pq.enqueue(q);
    if (pq.size() > k) sum -= pq.dequeue().element;
    if (pq.size() === k) {
      const unitWage = w / q;
      ans = Math.min(ans, sum * unitWage);
    }
  }

  return ans;
};
