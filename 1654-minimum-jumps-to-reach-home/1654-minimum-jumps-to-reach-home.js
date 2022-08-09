/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
var minimumJumps = function (forbidden, a, b, x) {
  const seen = new Set(forbidden);
  const upper = a + b + Math.max(x, Math.max(...forbidden));
  const queue = new Queue([[0, 0, true]]);

  while (!queue.isEmpty()) {
    const [cur, jumps, backward] = queue.dequeue();
    if (seen.has(cur)) continue;
    seen.add(cur);
    
    if (cur === x) return jumps;

    const [left, right] = [cur - b, cur + a];
    if (!seen.has(left) && left > 0 && backward)
      queue.enqueue([left, jumps + 1, false]);
    if (!seen.has(right) && right <= upper)
      queue.enqueue([right, jumps + 1, true]);
  }

  return -1;
};
