/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let [x, y, d] = [0, 0, 0];
  
  for (let ch of instructions) {
    if (ch === 'R') d = (d + 1) % 4;
    else if (ch === 'L') d = (d + 3) % 4;
    else {
      x += dirs[d][0];
      y += dirs[d][1];
    }
  }
  
  return !x && !y || d > 0;
};