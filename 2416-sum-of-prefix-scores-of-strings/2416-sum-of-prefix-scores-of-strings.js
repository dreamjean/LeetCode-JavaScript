/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function(words) {
  const trie = new Trie();
  
  words.forEach((word) => trie.insert(word));
  
  return words.map((word) => trie.getScore(word));
};

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  
  insert(word) {
    let node = this.root;
    
    for (let ch of word) {
      if (!node.next[ch]) node.next[ch] = new TrieNode();
      
      node = node.next[ch];
      node.count++;
    }
  }
  
  getScore(word) {
    let node = this.root;
    let score = 0;
    
    for (let ch of word) {
      node = node.next[ch];
      score += node.count;
    }
    
    return score;
  }
}

class TrieNode {
  constructor() {
    this.next = {};
    this.count = 0;
  }
}