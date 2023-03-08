/**
 * @param {number[]} parents
 * @param {number[][]} queries
 * @return {number[]}
 */
var maxGeneticDifference = function(parents, queries) {
  const [m, n] = [parents.length, queries.length];
  const graph = Array.from({ length: m }, () => []);
  const queriesByNode = Array.from({ length: m }, () => []);
  const trie = new Trie();
  const ans = new Array(n);
  let root = -1;
  
  parents.forEach((parent, i) => {
    if (parent === -1) root = i;
    else graph[parent].push(i);
  })
  
  queries.forEach(([node, val], i) => queriesByNode[node].push([val, i]));
  
  dfs(root, trie, graph, queriesByNode, ans);
  
  return ans;
};

const dfs = (curr, trie, graph, queriesByNode, ans) => {
  trie.insert(curr, 1);
  queriesByNode[curr].forEach(([val, i]) => ans[i] = trie.findMaxXOR(val));
  graph[curr].forEach((next) => dfs(next, trie, graph, queriesByNode, ans));
  trie.insert(curr, -1);
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  
  insert(num, d) {
    let node = this.root;
    
    for (let i = 17; i >= 0; i--) {
      const bit = (num >> i) & 1;
      if (!node.next[bit]) node.next[bit] = new TrieNode();
      
      node = node.next[bit];
      node.count += d;
    }
  }
  
  findMaxXOR(num) {
    let node = this.root;
    let max = 0;
    
    for (let i = 17; i >= 0; i--) {
      const bit = (num >> i) & 1;
      if (node.next[1 - bit] && node.next[1 - bit].count > 0) {
        max |= (1 << i);
        node = node.next[1 - bit];
      }
      
      else node = node.next[bit];
    }
    
    return max;
  }
}

class TrieNode {
  constructor() {
    this.next = [null, null];
    this.count = 0;
  }
}