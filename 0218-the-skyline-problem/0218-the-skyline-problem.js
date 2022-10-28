/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  const heights = [];
  const maxHeap = [0];
  const ans = [];
  let maxHeight = 0;

  for (let [left, right, height] of buildings) {
    heights.push([left, 0 - height], [right, height]);
  }

  heights.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  for (let [pos, height] of heights) {
    if (height < 0) maxHeap.push(0 - height);
    else maxHeap.splice(maxHeap.indexOf(height), 1);

    const currMaxHeight = Math.max(...maxHeap);
    if (currMaxHeight !== maxHeight) {
      ans.push([pos, currMaxHeight]);
      maxHeight = currMaxHeight;
    }
  }

  return ans;
};
