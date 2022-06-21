/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let [root, top, pop, i] = [null, null, null, 0];
    
    for (const val of preorder) {
        const node = new TreeNode(val);
        if (pop) [pop.right, pop] = [node, null];
        else if (top) top.left = node;
        else root = node;
        
        [node.right, top] = [top, node];
        
        while (top && top.val === inorder[i]) {
            pop = top;
            top = pop.right;
            pop.right = null;
            ++i
        }
    }
    
    return root;
};