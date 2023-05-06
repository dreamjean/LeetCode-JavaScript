/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
  const heights = [0];
  const lines = [];
  const ans = [];
  let maxHeight = 0;
  
  buildings.forEach(([left, right, height]) => lines.push([left, -height], [right, height]));
  
  lines.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  
  for (let [pos, height] of lines) {
    if (height < 0) heights.push(-height);
    else heights.splice(heights.indexOf(height), 1);
    
    let currMaxHeight = Math.max(...heights);
    if (currMaxHeight !== maxHeight) {
      ans.push([pos, currMaxHeight]);
      maxHeight = currMaxHeight;
    }
  }
  
  return ans;
};