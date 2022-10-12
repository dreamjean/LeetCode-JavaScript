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
var allPossibleFBT = function(n) {
  return !(n % 2) ? [] : helper(n);
};

const helper = (n) => {
  if (n === 1) return [new TreeNode(0)];
  
  const ans = [];
  for (let i = 1; i < n; i += 2) {
    const left = helper(i);
    const right = helper(n - 1 - i);
    for (let l of left) {
      for (let r of right) {
        const node = new TreeNode(0, l, r);
        ans.push(node);
      }
    }
  }
  
  return ans;
}