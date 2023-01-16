/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const ans = [];
  let [start, end] = newInterval;
  
  for (let [i, [a, b]] of intervals.entries()) {
    if (b < start) ans.push([a, b]);
    else if (a > end) {
      ans.push([start, end], ...intervals.slice(i));
      break;
    }
    else {
      start = Math.min(start, a);
      end = Math.max(end, b);
    }
  }
  
  if (!ans.length || ans.at(-1)[1] < start) ans.push([start, end]);
  
  return ans;
};