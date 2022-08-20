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
  const maxIndex = nums.indexOf(max);
  const n = nums.length;

  return new TreeNode(
    max,
    !maxIndex ? null : constructMaximumBinaryTree(nums.slice(0, maxIndex)),
    maxIndex === n - 1
      ? null
      : constructMaximumBinaryTree(nums.slice(maxIndex + 1))
  );
};
