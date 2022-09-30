/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const max = Math.max(...nums);
  const maxIdx = nums.indexOf(max);

  if (!nums.length) return null;

  return new TreeNode(
    max,
    constructMaximumBinaryTree(nums.slice(0, maxIdx)),
    constructMaximumBinaryTree(nums.slice(maxIdx + 1))
  );
};
