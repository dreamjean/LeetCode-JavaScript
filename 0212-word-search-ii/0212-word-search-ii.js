/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  const [m, n] = [board.length, board[0].length];
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const ans = [];
  
  const buildTrie = () => {
    const root = {};
    
    for (let word of words) {
      let node = root;
      for (let c of word) {
        if (!node[c]) node[c] = {};
        node = node[c];
      }
      
      node.word = word;
    }
    
    return root;
  }
  
  const search = (node, r, c) => {
    if (node.word) {
      ans.push(node.word);
      node.word = null;
    }
    
    if (r < 0 || r >= m || c < 0 || c >= n || !node[board[r][c]]) return;
    
    const char = board[r][c];
    board[r][c] = '*';
    dirs.forEach(([dx, dy]) => search(node[char], r + dx, c + dy));
    
    board[r][c] = char;
  }
  
  let root = buildTrie();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      search(root, i, j);
    }
  }
  
  return ans;
};