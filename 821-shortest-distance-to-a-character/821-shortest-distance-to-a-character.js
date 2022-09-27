/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const n = s.length;
  const ans = [];
  let pos = -n;

  for (let i = 0; i < n; i++) {
    if (s[i] === c) pos = i;
    ans[i] = i - pos;
  }

  for (let i = pos - 1; i >= 0; i--) {
    if (s[i] === c) pos = i;
    ans[i] = Math.min(ans[i], pos - i);
  }

  return ans;
};
