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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  if (!root) return 0;
  
  const left = rangeSumBST(root.left, low, high);
  const right = rangeSumBST(root.right, low, high);
  
  if (root.val < low) return right;
  if (root.val > high) return left;
  
  return root.val + left + right;
};