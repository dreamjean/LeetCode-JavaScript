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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const ans = [];
  
  const helper = (node, sum, path = []) => {
    if (!node) return;
    
    sum -= node.val;
    path.push(node.val);
    if (!node.left && !node.right && !sum) ans.push([...path]);
    
    helper(node.left, sum, path);
    helper(node.right, sum, path);
    path.pop();
  }
  
  helper(root, targetSum);
  
  return ans;
};