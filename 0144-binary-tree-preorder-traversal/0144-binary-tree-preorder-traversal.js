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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  return dfs(root);
};

const dfs = (node,arr = []) => {
  if (!node) return [];
  
  arr.push(node.val);
  if (node.left) dfs(node.left, arr);
  if (node.right) dfs(node.right, arr);
  
  return arr;
}