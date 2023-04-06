/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const n = ratings.length;
  const children = new Array(n).fill(1);
  
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1])
      children[i] = children[i - 1] + 1;
  }
  
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1])
      children[i] = Math.max(children[i], children[i + 1] + 1);
  }
  
  return children.reduce((a, b) => a + b);
};