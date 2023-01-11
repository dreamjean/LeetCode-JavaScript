/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const targets = tickets.reduce((map, [a, b]) => (map[a] ? map[a].push(b) : map[a] = [b], map), {});
  const ans = [];
  
  Object.values(targets).forEach((target) => target.sort((a, b) => a.localeCompare(b)));
  
  const dfs = (curr) => {
    const next = targets[curr];
    while (next && next.length > 0) dfs(targets[curr].shift());
    
    ans.push(curr);
  }
  
  dfs('JFK');
  
  return ans.reverse();
};