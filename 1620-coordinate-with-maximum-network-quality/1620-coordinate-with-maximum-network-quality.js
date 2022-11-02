/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function(towers, radius) {
  towers.sort((a, b) => a[0] - b[0]);
  const n = towers.length;
  let [maxX, maxY, maxQ] = [0, 0, 0];
  
  for (let x = towers[0][0]; x <= towers[n - 1][0]; ++x) {
    for (let y = 0; y <= 100; ++y) {
      let q = 0;
      for (const [tx, ty, tq] of towers) {
        const dist = Math.sqrt((x - tx) ** 2 + (y - ty) **2);
        if (dist <= radius) q += ~~(tq / (1 + dist));
      }
      
      if (q > maxQ) [maxX, maxY, maxQ] = [x, y, q];
    }
  }
  
  return [maxX, maxY];
};

