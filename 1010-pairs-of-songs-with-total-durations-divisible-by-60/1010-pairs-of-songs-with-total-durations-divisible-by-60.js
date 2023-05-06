/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  const map = {};
  let ans = 0;
  
  time.forEach((t) => {
    t %= 60;
    let diff = !t ? t : 60 - t;
    if (map[diff]) ans += map[diff];
    map[t] ? map[t]++ : map[t] = 1;
  })
  
  return ans;
};