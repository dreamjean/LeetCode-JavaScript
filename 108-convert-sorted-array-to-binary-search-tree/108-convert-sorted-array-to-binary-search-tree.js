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
var sortedArrayToBST = function(nums) {
  return buildTree(nums, 0, nums.length)
};

const buildTree = (nums, left, right) => {
  if (left >= right) return null;
  
  const mid = (left + right) >>> 1;
  
  return new TreeNode(nums[mid], buildTree(nums, left, mid), buildTree(nums, mid + 1, right));
}