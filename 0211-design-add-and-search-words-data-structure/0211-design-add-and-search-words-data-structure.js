class TrieNode {
  constructor() {
    this.children = new Array(26).fill(null);
    this.isWord = false;
  }
}

var WordDictionary = function() {
  this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;
  
  for (let ch of word) {
    const index = ch.charCodeAt() - 'a'.charCodeAt();
    if (!node.children[index]) node.children[index] = new TrieNode();
    
    node = node.children[index];
  }
  
  node.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  const dfs = (index, node, word) => {
    if (index === word.length) return node.isWord;
    
    const ch = word[index++];
    if (ch !== '.') {
      const child = node.children[ch.charCodeAt() - 'a'.charCodeAt()];
      if (child && dfs(index, child, word)) return true;
    } else {
      for (let child of node.children) 
        if (child && dfs(index, child, word)) return true;
    }
    
    return false;
  }
  
  return dfs(0, this.root, word);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */