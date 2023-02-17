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
var minDiffInBST = function(root) {
  let [prev, min] = [-Infinity, Infinity];
  
  const dfs = (node) => {
    if (!node) return min;
    
    dfs(node.left);
    min = Math.min(min, node.val - prev);
    prev = node.val;
    dfs(node.right);
    
    return min;
  }
  
  return dfs(root)
};