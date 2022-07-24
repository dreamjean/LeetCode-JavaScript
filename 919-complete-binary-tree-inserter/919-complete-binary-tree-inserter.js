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
 */
var CBTInserter = function (root) {
  this.root = root;
  this.queue = [root];

  while (this.queue[0].right) {
    const node = this.queue.shift();
    this.queue.push(node.left, node.right);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
  let tail = this.queue[0];
  if (tail.left) {
    tail.right = new TreeNode(val);
    this.queue.push(tail.left, tail.right);
    this.queue.shift();
  } else tail.left = new TreeNode(val);

  return tail.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
