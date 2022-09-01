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
var goodNodes = function(root) {
  return helper(root, root.val);
};

const helper = (node, max) => {
  if (!node) return 0;
  
  max = Math.max(max, node.val);
  
  return +(node.val >= max) + helper(node.left, max) + helper(node.right, max);
}