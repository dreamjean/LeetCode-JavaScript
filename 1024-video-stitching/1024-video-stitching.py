/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function(clips, time) {
  clips.sort((a, b) => a[0] - b[0]);
  let [farCanReach, end, count] = [0, 0, 0];
  
  for (let i = 0; end < time; end = farCanReach) {
    count++;
    while (i < clips.length && clips[i][0] <= end)
      farCanReach = Math.max(farCanReach, clips[i++][1]);
    
    if (end === farCanReach) return -1;
  }
  
  return count;
};