/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) { 
  const counter = tasks.reduce((acc, curr) => (acc[curr] ? acc[curr]++ : acc[curr] = 1, acc), {});
  let ans = 0;
  
  for (let num of Object.values(counter)) {
    if (num === 1) return -1;
    
    ans += Math.ceil(num / 3);
  }
  
  return ans;
};