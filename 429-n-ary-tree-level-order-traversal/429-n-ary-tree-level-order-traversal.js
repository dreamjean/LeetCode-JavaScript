/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const ans = [];

  while (queue.length) {
    const curr = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const { val, children } = queue.shift();
      curr.push(val);
      children.forEach((child) => queue.push(child));
    }

    ans.push(curr);
  }

  return ans;
};
