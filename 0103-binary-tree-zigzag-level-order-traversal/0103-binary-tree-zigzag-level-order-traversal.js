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
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  
  const ans = [];
  let queue = [root];
  let depth = 1;
  
  while (queue.length) {
    const size = queue.length;
    const currRow = [];
    for (let i = 0; i < size; i++) {
      const { val, left, right } = queue.shift();
      depth & 1 ? currRow.push(val) : currRow.unshift(val);
      if (left) queue.push(left);
      if (right) queue.push(right);
    }
    
    depth++;
    ans.push(currRow);
  }
  
  return ans;
};