/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  return helper(1, n);
};

const helper = (start, end) => {
  if (start > end) return [null];

  const ans = [];
  for (let i = start; i <= end; i++) {
    const left = helper(start, i - 1);
    const right = helper(i + 1, end);

    for (let l of left) {
      for (let r of right) {
        const node = new TreeNode(i, l, r);
        ans.push(node);
      }
    }
  }

  return ans;
};
