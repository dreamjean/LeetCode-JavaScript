/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  const copy = {};
  
  const dfs = (node) => {
    if (!node) return node;
    
    if (!(node.val in copy)) {
      copy[node.val] = new Node(node.val);
      copy[node.val].neighbors = node.neighbors.map(dfs);
    }
    
    return copy[node.val];
  }
  
  return dfs(node);
};