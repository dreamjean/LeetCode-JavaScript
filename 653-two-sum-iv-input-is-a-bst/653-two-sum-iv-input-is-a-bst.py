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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const set = new Set();
  const queue = [root];
  
  while (queue.length) {
    const { val, left, right } = queue.shift();
    if (set.has(k - val)) return true;
    
    set.add(val);
    if (left) queue.push(left);
    if (right) queue.push(right);
  }
  
  return false;
};