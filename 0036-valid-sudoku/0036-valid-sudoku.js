/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const set = new Set();
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const c = board[i][j];
      if (c === '.') continue;
            
      const boxNum = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      const [inRow, inCol, inSubBox] = [`r-${i}-${c}`, `c-${c}-${j}`, `s-${boxNum}-${c}`];
      if (set.has(inRow) || set.has(inCol) || set.has(inSubBox)) return false;

      set.add(inRow);
      set.add(inCol);
      set.add(inSubBox);
    }
  }
  
  return true;
};