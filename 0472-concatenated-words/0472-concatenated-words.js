/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
  words.sort((a, b) => a.length - b.length);
  const trie = new Trie();
  const ans = [];
  
  for (let word of words) {
    trie.search(word)
      ? ans.push(word)
      : trie.insert(word);
  }
  
  return ans;
};

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  
  insert(word) {
    let node = this.root;
    
    for (let ch of word) {
      const index = ch.charCodeAt() - 'a'.charCodeAt();
      if (!node.next[index]) node.next[index] = new TrieNode();
      
      node = node.next[index];
    }
    
    node.isWord = true;
  }
  
  search(word) {
    let node = this.root;
    
    for (let i = 0; i < word.length; i++) {
      if (node.isWord && this.search(word.substring(i))) return true;
      
      const index = word.charCodeAt(i) - 'a'.charCodeAt();
      if (!node.next[index]) return false;
      
      node = node.next[index];
    }
    
    return node.isWord;
  }
}

class TrieNode {
  constructor() {
    this.next = new Array(26).fill(null);
    this.isWord = false;
  }
}