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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  
  const queue = [root];
  const ans = [];
  
  while (queue.length) {
    const curr = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const { val, left, right } = queue.shift();
      curr.push(val);
      if (left) queue.push(left);
      if (right) queue.push(right);
    }
    
    ans.push(curr);
  }
  
  return ans;
};