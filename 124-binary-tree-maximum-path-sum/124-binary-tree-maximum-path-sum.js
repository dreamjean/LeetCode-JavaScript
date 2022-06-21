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
    
    const maxGain = node => {
        if (!node) return 0;
        
        const { val, left, right } = node;
        const leftGain = Math.max(maxGain(left), 0);
        const rightGain = Math.max(maxGain(right), 0);
        max = Math.max(max, val + leftGain + rightGain);
        
        return val + Math.max(leftGain, rightGain)
    }
    
    maxGain(root);
    
    return max;
};