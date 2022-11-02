/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  return intervals
    .sort((a, b) => a[0] - b[0])
    .reduce((acc, curr, i) => {
      if (!i) acc.push(curr);

      let last = acc.at(-1);
      curr[0] <= last[1]
        ? (last[1] = Math.max(last[1], curr[1]))
        : acc.push(curr);

      return acc;
    }, []);
};
