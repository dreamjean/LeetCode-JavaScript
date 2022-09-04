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
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  const map = {};

  const traverse = (node, row = 0, col = 0) => {
    if (!node) return;
    if (!map[col]) map[col] = [];
    if (!map[col][row]) map[col][row] = [];
    map[col][row].push(node.val);
    traverse(node.left, row + 1, col - 1);
    traverse(node.right, row + 1, col + 1);
  };

  traverse(root);

  return Object.keys(map)
    .sort((a, b) => a - b)
    .map((key) =>
      map[key].reduce(
        (acc, curr) => (acc.push(...curr.sort((a, b) => a - b)), acc),
        []
      )
    );
};
