/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
  const n = points.length;
  const dicts = new Array(n).fill(Infinity);
  let [cost, next] = [0, 0];
  dicts[0] = 1;
  
  for (let step = 1; step < n; step++) {
    let [min, pos] = [Infinity, -1];
    for (let i = 1; i < n; i++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[next];
      if (dicts[i]) {
        dicts[i] = Math.min(dicts[i], Math.abs(x1 - x2) + Math.abs(y1 - y2));
        if (dicts[i] < min) [min, pos] = [dicts[i], i];  
      }     
    }
    
    cost += min;
    dicts[pos] = 0;
    next = pos;
  }
  
  return cost;
};