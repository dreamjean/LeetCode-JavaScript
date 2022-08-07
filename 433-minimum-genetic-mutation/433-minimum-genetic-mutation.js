/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  const seen = new Set(bank);
  const queue = [[start, 0]];

  while (queue.length) {
    const [gen, cost] = queue.shift();
    if (gen === end) return cost;

    for (let i = 0; i < gen.length; i++) {
      for (let c = 65; c <= 122; c++) {
        const newGen = gen.slice(0, i) + String.fromCharCode(c) + gen.slice(i + 1);
        if (!seen.has(newGen)) continue;

        seen.delete(newGen);
        queue.push([newGen, cost + 1]);
      }
    }
  }

  return -1;
};
