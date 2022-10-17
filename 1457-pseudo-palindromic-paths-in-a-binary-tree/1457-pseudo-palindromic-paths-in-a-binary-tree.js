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
var pseudoPalindromicPaths = function (root) {
  return dfs(root);
};

const dfs = (node, count = 0) => {
  if (!node) return 0;

  count ^= 1 << node.val;
  if (!node.left && !node.right) return count & (count - 1) ? 0 : 1;

  return dfs(node.left, count) + dfs(node.right, count);
};
