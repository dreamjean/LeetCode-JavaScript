/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
  const players = {};
  const ans = Array.from({ length: 2 }, () => []);
  
  for (let [winner, loser] of matches) {
    if (!(winner in players)) players[winner] = 0;
    players[loser] ? players[loser]++ : players[loser] = 1;
  }
  
  Object.entries(players).forEach(([player, cnt]) => cnt < 2 && ans[cnt].push(+player));
  
  return ans;
};