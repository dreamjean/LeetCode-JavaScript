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
var maxLevelSum = function (root) {
  const queue = [root];
  let [maxSum, leave, ans] = [-Infinity, 1, 1];

  while (queue.length) {
    let sum = 0;
    for (let i = queue.length - 1; i >= 0; i--) {
      const { val, left, right } = queue.shift();
      sum += val;
      if (left) queue.push(left);
      if (right) queue.push(right);
    }

    if (sum > maxSum) [maxSum, ans] = [sum, leave];

    leave++;
  }

  return ans;
};
