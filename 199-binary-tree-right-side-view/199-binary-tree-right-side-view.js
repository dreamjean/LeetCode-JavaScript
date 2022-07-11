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
    
    let queue = [root];
    const ans = [];
    
    while (queue.length) {
        const size = queue.length;
        const currRow = [];
        let currVal = 0;
        for (let i = size - 1; i >= 0; i--) {
            const { val, left, right } = queue.shift();
            if (left) currRow.push(left);
            if (right) currRow.push(right);
            
            currVal = val;
        }
        
        ans.push(currVal);
        queue = currRow;
    }
    
    return ans;
};