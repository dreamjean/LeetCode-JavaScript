/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let ans = "";

  for (let i = s.length - 1; i >= 0; i--) {
    let num = 0;
    if (s[i] === "#") {
      num = +s.slice(i - 2, i);
      i -= 2;
    } else num = +s[i];
    ans = String.fromCharCode(num + 96) + ans;
  }

  return ans;
};
