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
var maxProduct = function(root) {
  const mod = 1e9 + 7;
  const total = getSum(root);
  let ans = 0;
  
  const dfs = (node) => {
    if (!node) return 0;
    
    let sum = node.val + dfs(node.left) + dfs(node.right);
    ans = Math.max(ans, sum * (total - sum));
    
    return sum;
  }
  
  dfs(root);
  
  return ans % mod;
};

const getSum = (node) => {
  if (!node) return 0;
  
  return node.val + getSum(node.left) + getSum(node.right);
}