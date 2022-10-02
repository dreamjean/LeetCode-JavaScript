/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function (start, end) {
  const n = start.length;
  let [i, j] = [0, 0];

  while (i < n || j < n) {
    if (start[i] === "X") {
      i++;
      continue;
    }

    if (end[j] === "X") {
      j++;
      continue;
    }

    if (
      start[i] !== end[j] ||
      (start[i] === "R" && i > j) ||
      (start[i] === "L" && i < j)
    )
      return false;

    i++;
    j++;
  }

  return true;
};
