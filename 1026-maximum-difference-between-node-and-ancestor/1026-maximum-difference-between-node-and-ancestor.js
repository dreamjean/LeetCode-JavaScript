/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
  let ans = 0;
  
  const dfs = (node, min = Infinity, max = 0) => {
    if (!node) return;
    
    min = Math.min(min, node.val);
    max = Math.max(max, node.val);
    
    dfs(node.left, min, max);
    dfs(node.right, min, max);
    
    ans = Math.max(ans, max - min);
  }
  
  dfs(root);
  
  return ans;
};