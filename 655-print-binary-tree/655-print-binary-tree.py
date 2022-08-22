# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def printTree(self, root: Optional[TreeNode]) -> List[List[str]]:
        d = self.depth(root)
        ans = [['']*(2**d-1) for _ in range(d)]
        
        def dfs(node, row, pos):
            ans[row][pos] = str(node.val)
            if node.left:
                dfs(node.left, row+1, pos-2**(d-row-2))
            if node.right:
                dfs(node.right, row+1, pos+2**(d-row-2))
                
        dfs(root, 0, 2**(d-1)-1)
        
        return ans
        
        
    def depth(self, node):
        if not node:
            return 0
        return 1 + max(self.depth(node.left), self.depth(node.right))
        