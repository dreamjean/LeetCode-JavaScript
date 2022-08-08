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
var preorder = function (root) {
  if (!root) return [];

  const stack = [root];
  const ans = [];

  while (stack.length) {
    const { val, children } = stack.pop();
    ans.push(val);
    for (let i = children.length - 1; i >= 0; --i) 
      stack.push(children[i]);
  }

  return ans;
};
