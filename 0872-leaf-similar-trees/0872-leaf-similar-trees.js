/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  return getLeafs(root1) === getLeafs(root2);
};

const getLeafs = (node) => {
  const stack = [node];
  let leafs = '';
  
  while (stack.length) {
    const { val, left, right } = stack.pop();
    if (!left && !right) leafs += val;
    
    if (left) stack.push(left);
    if (right) stack.push(right);
  }
  
  return leafs;
}