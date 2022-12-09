/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  const [m, n] = [board.length, board[0].length];
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const trie = buildTrie(words);
  const ans = [];
  
  const search = (node, r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n || !node.children[board[r][c]]) return;
    
    const char = board[r][c];
    node = node.children[char];
    
    if (node.word) {
      ans.push(node.word);
      node.word = null;
    }
    
    board[r][c] = '*';
    
    dirs.forEach(([dx, dy]) => search(node, dx + r, dy + c));
    
    board[r][c] = char;
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      search(trie, i, j);
    }
  }
  
  return ans;
};

const buildTrie = (words) => {
  let node = new TrieNode();
  
  for (let word of words) {
    let curr = node;
    for (let c of word) {
      if (!curr.children[c]) curr.children[c] = new TrieNode();
      
      curr = curr.children[c];
    }
    
    curr.word = word;
  }
  
  return node;
}

class TrieNode {
  constructor () {
    this.children = {};
    this.word = null;
  }
}