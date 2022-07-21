/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let [start, maxLen] = [0, 0];
  const n = s.length;

  const expendAroundMiddle = (l, r) => {
    while (l >= 0 && r < n && s[l] === s[r]) {
      const currLen = r - l + 1;
      if (currLen > maxLen) [start, maxLen] = [l, currLen];

      l--;
      r++;
    }
  };

  for (let i = 0; i < n; i++) {
    expendAroundMiddle(i, i);
    expendAroundMiddle(i, i + 1);
  }

  return s.slice(start, start + maxLen);
};
