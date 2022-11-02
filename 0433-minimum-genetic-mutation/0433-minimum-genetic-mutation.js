/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  const set = new Set(bank);
  const queue = [[start, 0]];

  while (queue.length) {
    const [genetic, cost] = queue.shift();
    if (genetic === end) return cost;

    for (let i = 0; i < genetic.length; i++) {
      for (let ch of "ACGT") {
        const newGenetic = genetic.slice(0, i) + ch + genetic.slice(i + 1);
        if (!set.has(newGenetic)) continue;

        set.delete(newGenetic);
        queue.push([newGenetic, cost + 1]);
      }
    }
  }

  return -1;
};
