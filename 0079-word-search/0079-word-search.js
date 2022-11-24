/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const [m, n] = [board.length, board[0].length];
  
  const find = (r, c, i) => {
    if (i === word.length) return true;
    if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== word[i]) return false;
    
    let char = word[i++];
    board[r][c] = '*';
    let res = find(r - 1, c, i) || find(r + 1, c, i) || find(r, c - 1, i) || find(r, c + 1, i);
    
    board[r][c] = char;
    
    return res;
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && find(i, j, 0)) return true; 
    }
  }
  
  return false;
};