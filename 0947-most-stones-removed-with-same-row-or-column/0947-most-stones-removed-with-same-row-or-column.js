/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
  const parent = {};
  let count = 0;
  
  const find = (x) => {
    if (!parent[x]) {
      parent[x] = x;
      count++;
    }
    
    else if (x !== parent[x]) parent[x] = find(parent[x]);
    
    return parent[x];
  }
  
  const union = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX === rootY) return;
    
    parent[rootX] = rootY;
    count--;
  }
  
  stones.forEach(([u, v]) => union(u, ~v));
  
  return stones.length - count;
};