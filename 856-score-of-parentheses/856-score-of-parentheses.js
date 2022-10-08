/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  let [pwr, ans] = [0, 0];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === "(") pwr++;
    else if (s[i - 1] === "(") ans += 1 << pwr--;
    else pwr--;
  }

  return ans;
};
