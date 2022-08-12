/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pairsMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];

  for (let p of s) {
    if (pairsMap[p]) stack.push(pairsMap[p]);
    else if (stack.pop() !== p) return false;
  }

  return !stack.length;
};
