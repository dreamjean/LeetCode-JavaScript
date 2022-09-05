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
  const ans = [];
  helper(root, ans);
  
  return ans;
};

const helper = (node, ans, map = new Map) => {
  if (!node) return '#';
  
  const subtree = `${node.val}-${helper(node.left, ans, map)}-${helper(node.right, ans, map)}`;
  map.set(subtree, (map.get(subtree) || 0) + 1);
  
  if (map.get(subtree) === 2) ans.push(node);
  
  return subtree;
}