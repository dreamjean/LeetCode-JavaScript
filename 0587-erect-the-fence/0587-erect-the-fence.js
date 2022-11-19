/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
  trees.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  const lower = [];
  const upper = [];
  
  for (let tree of trees) {
    while (lower.length >= 2 && cmp(lower.at(-2), lower.at(-1), tree) > 0) lower.pop();
    while (upper.length >= 2 && cmp(upper.at(-2), upper.at(-1), tree) < 0) upper.pop();
    
    lower.push(tree);
    upper.push(tree);
  }
  
  return [...new Set([...upper, ...lower])];
};

const cmp = (p1, p2, p3) => {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const [x3, y3] = p3;
  
  return (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1);
}