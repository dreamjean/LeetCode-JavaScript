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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    
    const ans = [];
    let queue = [root];
    
    while (queue.length) {
        const size = queue.length;
        const currQ = [];
        let currVal = 0;
        
        for (let i = 0; i < size; i++) {
            const { val, left, right } = queue.shift();
            currVal = val;

            if (left) currQ.push(left);
            if (right) currQ.push(right);
        }

        ans.push(currVal);
        queue = currQ;
    }
    
    return ans;
};