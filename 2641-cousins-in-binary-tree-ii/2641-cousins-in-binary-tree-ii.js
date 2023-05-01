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
 * @return {TreeNode}
 */
var replaceValueInTree = function(root) {
  root.val = 0;
  const queue = [root];  
  
  while (queue.length) {
    const tmp = [];
    let sum = 0;
    let n = queue.length;
    while (n--) {
      const node = queue.shift();
      tmp.push(node);
      
      if (node.left) {
        sum += node.left.val;
        queue.push(node.left);
      }
      
      if (node.right) {
        sum += node.right.val;
        queue.push(node.right);
      }     
    }
    
    for (let node of tmp) {
        let t = sum;
        if (node.left) t -= node.left.val;
        if (node.right) t -= node.right.val;
        if (node.left) node.left.val = t;
        if (node.right) node.right.val = t;
      }
  }
  
  return root;
};

