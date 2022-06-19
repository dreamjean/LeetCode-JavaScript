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
var isValidBST = function(root) {
    return helper(root)
};

const helper = (node, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SFFE_INTEGER) => {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    
    return helper(node.left, min, node.val) && helper(node.right, node.val, max);
}