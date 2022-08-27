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
var widthOfBinaryTree = function (root) {
  const queue = [[root, 0]];
  let maxWidth = 1;

  while (queue.length) {
    const size = queue.length;
    const [start, end] = [queue[0][1], queue[size - 1][1]];
    maxWidth = Math.max(maxWidth, end - start + 1);

    for (let i = 0; i < size; i++) {
      let [node, index] = queue.shift();

      if (node.left) queue.push([node.left, (index - start) * 2]);
      if (node.right) queue.push([node.right, (index - start) * 2 + 1]);
    }
  }

  return maxWidth;
};
