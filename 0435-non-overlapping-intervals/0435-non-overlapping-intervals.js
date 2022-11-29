/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  const n = intervals.length;
  let [cnt, currEnd] = [1, intervals[0][1]];
  
  for (let i = 1; i < n; i++) {
    const [start, end] = intervals[i];
    if (start >= currEnd) {
      cnt++;
      currEnd = end;
    }
  }
  
  return n - cnt;
};