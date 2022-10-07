/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function (security, time) {
  if (!time) return security.map((_, i) => i);

  const set = new Set();
  const ans = [];
  let [increase, decrease] = [0, 0];

  for (let i = 1; i < security.length; i++) {
    const [prev, curr] = [security[i - 1], security[i]];
    curr <= prev ? decrease++ : (decrease = 0);
    curr >= prev ? increase++ : (increase = 0);

    if (decrease >= time) set.add(i);
    if (increase >= time && set.has(i - time)) ans.push(i - time);
  }

  return ans;
};
