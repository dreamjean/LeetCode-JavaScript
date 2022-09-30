/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
  const heights = [];
  const maxHeap = [0];
  const ans = [];
  let maxHeight = 0;
  
  for (let [start, end, height] of buildings) {
    heights.push([start, 0 - height], [end, height]);
  }
  
  heights.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  
  for (let [pos, height] of heights) {
    if (height < 0) maxHeap.push(0 - height);
    else maxHeap.splice(maxHeap.indexOf(height), 1);

    const curMaxHeight = Math.max(...maxHeap);
    if (curMaxHeight !== maxHeight) {
      ans.push([pos, curMaxHeight]);
      maxHeight = curMaxHeight;
    }
  }
  
  return ans;
};

