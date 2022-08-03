/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const n = ratings.length;
  const children = new Array(n).fill(1);

  for (let i = 1; i < n; i++)
    if (ratings[i - 1] < ratings[i]) children[i] = children[i - 1] + 1;

  for (let i = n - 1; i > 0; i--)
    if (ratings[i - 1] > ratings[i])
      children[i - 1] = Math.max(children[i - 1], children[i] + 1);

  return children.reduce((a, b) => a + b);
};
