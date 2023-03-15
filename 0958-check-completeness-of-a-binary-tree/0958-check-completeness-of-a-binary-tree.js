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
var isCompleteTree = function(root) {
  const queue = [root];
  let emptyPrev = false;
  
  while (queue.length) {
    const curr = queue.shift();
    if (curr) {
      if (emptyPrev) return false;
      
      queue.push(curr.left);
      queue.push(curr.right);
    }
    
    else emptyPrev = true;
  }
  
  return true;
};