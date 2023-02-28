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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  const map = {};
  const ans = [];
  
  const dfs = (node) => {
    if (!node) return '#';
    
    const sub = node.val + '.' + dfs(node.left) + '.' + dfs(node.right);
    map[sub] ? map[sub]++ : map[sub] = 1;
    if (map[sub] === 2) ans.push(node);
    
    return sub;
  }
  
  dfs(root);
  
  return ans;
};