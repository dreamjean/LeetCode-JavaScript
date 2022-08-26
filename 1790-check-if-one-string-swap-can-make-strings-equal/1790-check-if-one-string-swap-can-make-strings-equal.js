/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;

  let [first, second] = [-1, -1];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) continue;
    if (first === -1) first = i;
    else if (second === -1) second = i;
    else return false;
  }

  return s1[first] === s2[second] && s1[second] === s2[first];
};
