/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const [m, n] = [board.length, board[0].length];
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  
  const fill = (r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== 'O') return;
    
    board[r][c] = '*';
    dirs.forEach(([dx, dy]) => fill(dx + r, dy + c));
  }
  
  for (let i = 0; i < m; i++) {
    fill(i, 0);
    fill(i, n - 1);
  }
  
  for (let j = 0; j < n; j++) {
    fill(0, j);
    fill(m - 1, j);
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') board[i][j] = 'X';
      if (board[i][j] === '*') board[i][j] = 'O';
    }
  }
};