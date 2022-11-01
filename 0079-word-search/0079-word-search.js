/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const [m, n] = [board.length, board[0].length];

  const findWord = (r, c, start) => {
    if (start === word.length) return true;
    if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== word[start])
      return;

    const char = word[start++];
    board[r][c] = "*";

    let res =
      findWord(r + 1, c, start) ||
      findWord(r - 1, c, start) ||
      findWord(r, c + 1, start) ||
      findWord(r, c - 1, start);

    board[r][c] = char;

    return res;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (findWord(i, j, 0)) return true;
    }
  }

  return false;
};
