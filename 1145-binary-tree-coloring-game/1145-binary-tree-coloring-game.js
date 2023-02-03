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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function(root, n, x) {
  let [leftCount, rightCount] = [0, 0];
  
  const count = (node) => {
    if (!node) return 0;
    
    const left = count(node.left);
    const right = count(node.right);
    if (node.val === x) [leftCount, rightCount] = [left, right];
    
    return left + right + 1;
  }
  
  count(root);
  
  return Math.max(leftCount, rightCount, n - 1 - leftCount - rightCount) > n / 2;
};