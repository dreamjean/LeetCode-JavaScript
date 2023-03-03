class TrieNode {
  constructor() {
    this.next = new Array(26).fill(null);
    this.isWord = false;
  }
  
  insert(word) {
    let node = this;
    
    for (let i = word.length - 1; i >= 0; i--) {
      const index = word.charCodeAt(i) - 'a'.charCodeAt();
      if (!node.next[index]) node.next[index] = new TrieNode();
      
      node = node.next[index];
    }
    
    node.isWord = true;
  }
}

/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
  this.chars = [];
  this.root = new TrieNode();
  
  words.forEach((word) => this.root.insert(word));
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
  this.chars.push(letter);
  let node = this.root;
  
  for (let i = this.chars.length - 1; i >= 0; i--) {
    const index = this.chars[i].charCodeAt() - 'a'.charCodeAt();
    if (!node.next[index]) return false;
    
    node = node.next[index];
    if (node && node.isWord) return true;
  }
  
  return false;
};

/** 
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */