/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function (n, k) {
  const ans = [];

  const dfs = (path = []) => {
    if (path.length === n) return ans.push(+path.join(""));

    for (let i = 0; i < 10; i++) {
      if (
        (!path.length && !i) ||
        (path.length && Math.abs(path.at(-1) - i) !== k)
      )
        continue;

      dfs([...path, i]);
    }
  };

  dfs();

  return ans;
};
