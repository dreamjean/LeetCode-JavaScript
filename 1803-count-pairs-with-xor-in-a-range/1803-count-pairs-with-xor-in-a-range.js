/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countPairs = function(nums, low, high) {
  const trie = new Trie();
  let ans = 0;
  
  for (let num of nums) {
    ans += trie.searchSmallerThan(num, high + 1) - trie.searchSmallerThan(num, low);
    trie.insert(num);
  }
  
  return ans;
};

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  
  insert(num) {
    let node = this.root;
    
    for (let i = 14; i >= 0; i--) {
      const bit = (num >> i) & 1;
      if (!node.next[bit]) node.next[bit] = new TrieNode();
      
      node = node.next[bit];
      node.count++;
    }
  }
  
  searchSmallerThan(num, limit) {
    let node = this.root;
    let count = 0;
    
    for (let i = 14; i >= 0 && node; i--) {
      const lbit = (limit >> i) & 1;
      const nbit = (num >> i) & 1;
      if (lbit === 1) {
        if (node.next[nbit]) count += node.next[nbit].count;
        
        node = node.next[1 - nbit];
      }
      
      else node = node.next[nbit];
    }
    
    return count;
  }
}

class TrieNode {
  constructor() {
    this.next = [null, null];
    this.count = 0;
  }
}