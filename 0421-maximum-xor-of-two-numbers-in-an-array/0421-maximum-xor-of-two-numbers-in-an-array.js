/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  const root = new TrieNode();
  let max = 0;
  
  nums.forEach((num) => {
    insert(root, num);
    max = Math.max(max, maxXOR(root, num));
  })
  
  return max;
};

const maxXOR = (root, num) => {
  let node = root;
  let ans = 0;
  
  for (let i = 31; i >= 0; i--) {
    const bit = (num >> i) & 1;
    if (node.next[1 - bit]) {
      ans |= (1 << i);
      node = node.next[1 - bit];
    }
    
    else node = node.next[bit];
  }
  
  return ans;
}

const insert = (root, num) => {
  let node = root;
  
  for (let i = 31; i >= 0; i--) {
    const bit = (num >> i) & 1;
    if (!node.next[bit]) node.next[bit] = new TrieNode();
    
    node = node.next[bit];
  }
  
  return node;
}

class TrieNode {
  constructor() {
    this.next = [null, null];
  }
}