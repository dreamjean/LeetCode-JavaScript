/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  const ans = [];
  
  const helper = (node) => {
    if (!node) return
    
    ans.push(node.val);
    for (let child of node.children)
      helper(child);
  }
  
  helper(root);
  
  return ans;
};