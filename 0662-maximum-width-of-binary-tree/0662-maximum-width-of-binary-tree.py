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
var widthOfBinaryTree = function(root) {
  const queue = [[root, 1]];
  let max = 1;
  
  while (queue.length) {
    const size = queue.length;
    const start = queue[0][1];
    max = Math.max(max, queue[size - 1][1] - start + 1);
    
    for (let i = 0; i < size; i++) {
      let [node, index] = queue.shift();
      index -= start;
      if (node.left) queue.push([node.left, index * 2]);
      if (node.right) queue.push([node.right, index * 2 + 1]);
    }
  }
  
  return max;
};