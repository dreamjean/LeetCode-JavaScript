/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  backtrack(board);
};

const backtrack = (board) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') continue;
      
      for (let d = 1; d < 10; d++) {
        const digit = d.toString();
        if (!isValid(i, j, digit, board)) continue;
        
        board[i][j] = digit;
        if (backtrack(board)) return true;
        
        board[i][j] = '.';
      }
      
      return false;
    }
  }
  
  return true;
}

const isValid = (row, col, digit, board) => {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === digit || board[i][col] === digit) return false;
    
    const boxRow = ~~(row / 3) * 3 + ~~(i / 3);
    const boxCol = ~~(col / 3) * 3 + i % 3;
    if (board[boxRow][boxCol] === digit) return false;
  }
  
  return true;
}

