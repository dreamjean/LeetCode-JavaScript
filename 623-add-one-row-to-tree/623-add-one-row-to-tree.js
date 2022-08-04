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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  if (depth === 1) return new TreeNode(val, root, null);

  const queue = [root];
  let leave = 1;

  while (queue.length) {
    const size = queue.length;
    if (leave + 1 === depth) {
      for (let i = 0; i < size; ++i) {
        const node = queue.shift();
        node.left = new TreeNode(val, node.left, null);
        node.right = new TreeNode(val, null, node.right);
      }
      break;
    }

    for (let i = 0; i < size; ++i) {
      const { left, right } = queue.shift();
      if (left) queue.push(left);
      if (right) queue.push(right);
    }

    ++leave;
  }

  return root;
};
