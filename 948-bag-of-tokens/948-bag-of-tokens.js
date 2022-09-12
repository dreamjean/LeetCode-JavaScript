/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
  tokens.sort((a, b) => a - b);
  let [res, point, l, r] = [0, 0, 0, tokens.length - 1];
  
  while (l <= r) {
    if (tokens[l] <= power) {
      power -= tokens[l++];
      res = Math.max(res, ++point);
    }
    else if (point > 0) {
      point--;
      power += tokens[r--];
    }
    else break;
  }
  
  return res;
};