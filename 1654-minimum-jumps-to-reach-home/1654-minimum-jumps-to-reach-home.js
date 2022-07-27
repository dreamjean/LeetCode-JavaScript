/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
var minimumJumps = function (forbidden, a, b, x) {
  forbidden = new Set(forbidden);
  const upper = a + b + Math.max(x, Math.max(...forbidden));

  const queue = new Queue([[0, true, 0]]);
  while (!queue.isEmpty()) {
    const [cur, backward, jumps] = queue.dequeue();

    if (forbidden.has(cur)) continue;
    forbidden.add(cur);

    if (cur === x) return jumps;

    const newPosB = cur - b;
    if (!forbidden.has(newPosB) && newPosB > 0 && backward)
      queue.enqueue([newPosB, false, jumps + 1]);

    const newPosA = cur + a;
    if (!forbidden.has(newPosA) && newPosA <= upper)
      queue.enqueue([newPosA, true, jumps + 1]);
  }

  return -1;
};
