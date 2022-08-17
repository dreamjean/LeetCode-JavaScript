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
var deepestLeavesSum = function (root) {
  const queue = [root];
  let sum = 0;

  while (queue.length) {
    const size = queue.length;
    let currSum = 0;

    for (let i = 0; i < size; i++) {
      const { val, left, right } = queue.shift();
      currSum += val;
      
      if (left) queue.push(left);
      if (right) queue.push(right);
    }

    if (!queue.length) sum = currSum;
  }

  return sum;
};
