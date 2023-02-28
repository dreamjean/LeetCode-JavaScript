class TrieNode {
  constructor() {
    this.children = new Array(26).fill(null);
    this.val = 0;
  }
}


var MapSum = function() {
  this.root = new TrieNode();    
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  let node = this.root;
  
  for (let ch of key) {
    const index = ch.charCodeAt() - 'a'.charCodeAt();
    if (!node.children[index]) node.children[index] = new TrieNode();
    
    node = node.children[index];
  }
  
  node.val = val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  let node = this.root;
  
  for (let ch of prefix) {
    const index = ch.charCodeAt() - 'a'.charCodeAt();
    if (!node.children[index]) return 0;
    
    node = node.children[index];
  }
  
  return dfs(node);
};

const dfs = (node) => {
  let sum = node.val;
  
  for (let child of node.children) 
    if (child) sum += dfs(child);
  
  return sum;
}

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */