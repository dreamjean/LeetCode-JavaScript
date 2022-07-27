/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const from = new Set();
  const to = new Set();

  for (const [a, b] of edges) {
    to.add(b);
    from.add(a);
  }

  return [...from].filter((num) => !to.has(num));
};
