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
 * @return {boolean}
 */
var isValidBST = function (root) {
  return isValid(root);
};

const isValid = (
  node,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER
) => {
  if (!node) return true;
  if (node.val <= min || node.val >= max) return false;

  return (
    isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
  );
};
