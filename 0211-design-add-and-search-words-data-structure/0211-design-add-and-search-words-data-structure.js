class TrieNode {
  constructor() {
    this.children = {};
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
    if (!node.children[ch]) node.children[ch] = new TrieNode();
    
    node = node.children[ch];
  }
  
  node.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  const dfs = (index, node) => {
    if (index === word.length) return node.isWord;
    
    const ch = word[index++];
    if (ch === '.') 
      for (let child of Object.values(node.children)) 
        if (dfs(index, child)) return true;
    if (node.children[ch]) return dfs(index, node.children[ch]);
    
    return false;
  }
  
  return dfs(0, this.root);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */