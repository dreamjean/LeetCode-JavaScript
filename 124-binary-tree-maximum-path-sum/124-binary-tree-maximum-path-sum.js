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
var maxPathSum = function(root) {
  let max = -Infinity;
  
  const helper = (node) => {
    if (!node) return 0;
    
    const { val, left, right } = node;
    const leftGain = Math.max(0, helper(node.left));
    const rightGain = Math.max(0, helper(node.right));
    max = Math.max(max, val + leftGain + rightGain);
    
    return val + Math.max(leftGain, rightGain);
  }
  
  helper(root);
  
  return max;
};