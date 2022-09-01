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
var longestUnivaluePath = function (root) {
  let maxPath = 0;

  const helper = (node, val = -1) => {
    if (!node) return 0;

    const left = helper(node.left, node.val);
    const right = helper(node.right, node.val);
    maxPath = Math.max(maxPath, left + right);

    return node.val === val ? Math.max(left, right) + 1 : 0;
  };

  helper(root);

  return maxPath;
};
