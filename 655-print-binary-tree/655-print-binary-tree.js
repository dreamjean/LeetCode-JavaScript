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
 * @return {string[][]}
 */
var printTree = function (root) {
  const rows = getMaxDepth(root);
  const ans = Array.from({ length: rows }, () =>
    new Array(2 ** rows - 1).fill("")
  );

  const fillNum = (node, row, pos) => {
    ans[row++][pos] += node.val;

    if (node.left) fillNum(node.left, row, pos - 2 ** (rows - 1 - row));
    if (node.right) fillNum(node.right, row, pos + 2 ** (rows - 1 - row));
  };

  fillNum(root, 0, 2 ** (rows - 1) - 1);

  return ans;
};

const getMaxDepth = (node) => {
  if (!node) return 0;

  return 1 + Math.max(getMaxDepth(node.left), getMaxDepth(node.right));
};
