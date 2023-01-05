/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countPairs = function(nums, low, high) {
  return countSmallerPairs(nums, high + 1) - countSmallerPairs(nums, low);
};

const countSmallerPairs = (nums, limit) => {
  let root = new TrieNode();
  let count = 0;
  
  for (let num of nums) {
    count += countSmallerNode(root, num, limit);
    insert(root, num);
  }
  
  return count;
}

const countSmallerNode = (root, num, limit) => {
  let node = root;
  let count = 0;
  
  for (let i = 14; i >= 0 && node; i--) {
    const lbit = (limit >> i) & 1;
    const nbit = (num >> i) & 1;
    if (lbit === 1) {
      if (node.children[nbit]) count += node.children[nbit].count;
      
      node = node.children[1 - nbit];
    }
    
    else node = node.children[nbit];
  }
  
  return count;
}

const insert = (root, num) => {
  let node = root;
  
  for (let i = 14; i >= 0; i--) {
    const bit = (num >> i) & 1;
    if (!node.children[bit]) node.children[bit] = new TrieNode();
    
    node.children[bit].count++;
    node = node.children[bit];
  }
  
  return node;
}

class TrieNode {
  constructor(n) {
    this.children = [null, null];
    this.count = 0;
  }
}