/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  const [m, n] = [board.length, board[0].length];
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const trie = buildTrie(words);
  const ans = [];
  
  const search = (node, r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n || !node.next[board[r][c]]) return;
    
    const char = board[r][c];
    board[r][c] = '*';
    node = node.next[char];
    
    if (node.word) {
      ans.push(node.word);
      node.word = null;
    }
    
    dirs.forEach(([dr, dc]) => search(node, dr + r, dc + c));
    
    board[r][c] = char;
  }
  
  for (let r = 0; r < m; r++)
    for (let c = 0; c < n; c++) 
      search(trie, r, c);
  
  return ans;
};

const buildTrie = (words) => {
  const node = new TrieNode();
  
  for (let word of words) {
    let curr = node;
    for (let char of word) {
      if (!curr.next[char]) curr.next[char] = new TrieNode();
      
      curr = curr.next[char];
    }
    
    curr.word = word;
  }
  
  return node;
}

class TrieNode {
  constructor() {
    this.next = new Map();
    this.word = null;
  }
}