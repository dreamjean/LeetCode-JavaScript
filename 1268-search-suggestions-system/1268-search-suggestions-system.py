/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  products.sort();
  const trie = new Trie();
  
  products.forEach((word) => trie.insert(word));
  
  return trie.search(searchWord);
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
      if (node.words.length < 3) node.words.push(word);
    }
  }
  
  search(word) {
    const ans = [];
    let node = this.root;
    
    for (let ch of word) {
      const index = ch.charCodeAt() - 'a'.charCodeAt();
      if (node) node = node.next[index];
      ans.push(!node ? [] : node.words);
    }
    
    return ans;
  }
}

class TrieNode {
  constructor() {
    this.next = new Array(26).fill(null);
    this.words = [];
  }
}