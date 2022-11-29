/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
  const map = {};
  const set = new Set();
  const losers = [];
  
  for (let [winner, loser] of matches) {
    set.add(winner);
    map[loser] ? map[loser]++ : map[loser] = 1;
  }
  
  for (let [key, cnt] of Object.entries(map)) {
    const loser = +key;
    if (set.has(loser)) set.delete(loser);
    if (cnt === 1) losers.push(loser);
  } 
  
  return [[...set].sort((a, b) => a - b), losers];
};