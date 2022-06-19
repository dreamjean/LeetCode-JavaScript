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
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0;

    const queue = [root];
    let depth = 0;

    while (queue.length) {
        const size = queue.length;
        depth++;
        
        for (let i = 0; i < size; i++) {
            const { left, right } = queue.shift();
            if (!left && !right) return depth;

            if (left) queue.push(left);
            if (right) queue.push(right);
        }
    }
    
    return depth;
};