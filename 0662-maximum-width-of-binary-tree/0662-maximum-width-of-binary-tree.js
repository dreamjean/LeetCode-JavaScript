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
  const queue = [[root, 0]];
  let ans = 0;
  
  while (queue.length) {
    const size = queue.length;
    const [start, end] = [queue[0][1], queue[size - 1][1]];
    ans = Math.max(ans, end - start + 1);
    
    for (let i = 0; i < size; i++) {
      let [node, index] = queue.shift();
      index -= start;
      
      if (node.left) queue.push([node.left, index * 2]);
      if (node.right) queue.push([node.right, index * 2 + 1]);
    }
  }
  
  return ans;
};