/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const n = s.length;
  let [last1, last2] = [1, 1];

  if (s[0] === "0") return 0;
  if (n === 1) return 1;

  for (let i = 1; i < n; i++) {
    if (s[i] === "0") last1 = 0;
    if (s[i - 1] === "1" || (s[i - 1] === "2" && s[i] <= "6")) {
      last1 += last2;
      last2 = last1 - last2;
    }
    
    else last2 = last1;
  }

  return last1;
};
