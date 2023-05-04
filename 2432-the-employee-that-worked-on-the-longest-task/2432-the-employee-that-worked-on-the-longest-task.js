/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
  let [prevTime, maxDiff, ans] = [0, 0, 0];
  
  for (let [id, time] of logs) {
    let diff = time - prevTime;
    if (diff > maxDiff || (diff === maxDiff && id < ans)) {
      maxDiff = diff;
      ans = id;
    }
    
    prevTime = time;
  }
  
  return ans;
};