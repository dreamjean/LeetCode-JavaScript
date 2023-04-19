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
var longestZigZag = function(root) {
  let ans = 0;
  
  const dfs = (node, left, right) => {
    if (!node) return;
    
    ans = Math.max(ans, left, right);
    if (node.left) dfs(node.left, right + 1, 0);
    if (node.right) dfs(node.right, 0, left + 1);
  }
  
  dfs(root, 0, 0);
  
  return ans;
};