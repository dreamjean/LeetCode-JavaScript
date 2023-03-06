/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximizeXor = function(nums, queries) {
  nums.sort((a, b) => a - b);
  queries = queries.map((q, i) => [...q, i]).sort((a, b) => a[1] - b[1]);
  const trie = new Trie();
  const ans = new Array(queries.length);
  let j = 0;
  
  for (let [x, m, i] of queries) {
    while (j < nums.length && nums[j] <= m) {
      trie.insert(nums[j++]);
    }
    
    ans[i] = !j ? -1 : trie.maxXOR(x);
  }
  
  return ans;
};

class Trie {
  constructor() {
    this.root = [null, null];
  }
  
  insert(num) {
    let node = this.root;
    for (let i = 30; i >= 0; --i) {
      const bit = (num >> i) & 1;
      if (node[bit] === null) node[bit] = [null, null];
      
      node = node[bit];
    }
  }
  
  maxXOR(num) {
    let node = this.root;
    let ans = 0;
    for (let i = 30; i >= 0; --i) {
      let bit = (num >> i) & 1;
      if (node[1 - bit] !== null) {
        ans |= (1 << i);
        bit ^= 1;
      }
      node = node[bit];
    }
    
    return ans;
  }
}