/**
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function (s) {
  let [count, prev] = [0, 0];
  const ans = [];

  for (let i = 0; i < s.length; i++) {
    s[i] === "1" ? count++ : count--;
    if (!count) {
      ans.push("1" + makeLargestSpecial(s.slice(prev + 1, i)) + "0");
      prev = i + 1;
    }
  }

  return ans.sort().reverse().join("");
};
