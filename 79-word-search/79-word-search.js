/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const [m, n] = [board.length, board[0].length];

  const dfs = (r, c, i = 0) => {
    if (i === word.length) return true;
    if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== word[i])
      return false;

    const char = word[i++];
    board[r][c] = "*";

    const res =
      dfs(r + 1, c, i) ||
      dfs(r - 1, c, i) ||
      dfs(r, c + 1, i) ||
      dfs(r, c - 1, i);

    board[r][c] = char;

    return res;
  };
    
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (dfs(i, j)) return true;
    
    return false;
};
