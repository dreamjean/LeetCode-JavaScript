/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function (s) {
  const indexs = Array.from({ length: 26 }, () => [-1, -1]);
  const n = s.length;
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    const k = s.charCodeAt(i) - "A".charCodeAt();
    const [x, y] = indexs[k];
    ans += (i - y) * (y - x);
    indexs[k] = [y, i];
  }

  for (const [x, y] of indexs) ans += (n - y) * (y - x);

  return ans;
};
