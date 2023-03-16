/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const getTree = (left, right) => {
    if (left > right) return null;
    
    const val = postorder.pop();
    const index = inorder.indexOf(val);
    const node = new TreeNode(val);
    
    node.right = getTree(index + 1, right);
    node.left = getTree(left, index - 1);
    
    return node;
  }
  
  return getTree(0, inorder.length - 1);
};