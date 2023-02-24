/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) {
  let [x, y] = [0, 0];
  
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) continue;
    s1[i] === 'x' ? x++ : y++;
  }
  
  return (x + y) & 1 ? -1 : ~~((x + 1) / 2) + ~~((y + 1) / 2);
};