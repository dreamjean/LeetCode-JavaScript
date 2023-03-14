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
var sumNumbers = function(root) {
  let sum = 0;
  
  const dfs = (node, num = '') => {
    if (!node) return;
    
    num += node.val;
    if (!node.left && !node.right) sum += +num;
    
    dfs(node.left, num);
    dfs(node.right, num);
  }
  
  dfs(root);
  
  return sum;
};