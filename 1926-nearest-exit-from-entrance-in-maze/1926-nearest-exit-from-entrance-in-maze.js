/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
  const [m, n] = [maze.length, maze[0].length];
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const queue = [[...entrance, 0]];
  
  while (queue.length) {
    const [r, c, cost] = queue.shift();
    if ((r !== entrance[0] || c !== entrance[1]) && 
       (!r || r === m - 1 || !c || c === n - 1)) return cost;
    
    for (const [dx, dy] of dirs) {
      const [x, y] = [dx + r, dy + c];
      if (x < 0 || x >= m || y < 0 || y >= n || maze[x][y] !== '.') continue;
      
      maze[x][y] = '+';
      queue.push([x, y, cost + 1]);
    }
  }
  
  return -1;
};