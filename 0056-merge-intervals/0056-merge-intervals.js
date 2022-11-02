/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  const ans = [];
  let [start, end] = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i];
    if (currStart > end) {
      ans.push([start, end]);
      start = currStart;    
      end = currEnd;
    }
    
    else end = Math.max(end, currEnd);    
  }
  
  return [...ans, [start, end]];
};