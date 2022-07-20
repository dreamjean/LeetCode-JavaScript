/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const ans = [[1]];

  for (let i = 1; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++)
      row.push((ans[i - 1][j - 1] || 0) + (ans[i - 1][j] || 0));

    ans.push(row);
  }

  return ans;
};
