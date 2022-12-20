/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  const set = new Set([0]);
  
  const dfs = (start = 0) => {
    for (let next of rooms[start]) {
      if (set.has(next)) continue;
      
      set.add(next);
      dfs(next);
    }
  }
  
  dfs();
  
  return set.size === rooms.length;
};