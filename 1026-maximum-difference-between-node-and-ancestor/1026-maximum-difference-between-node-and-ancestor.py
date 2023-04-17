# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxAncestorDiff(self, root: Optional[TreeNode]) -> int:
        ans = 0
        
        def dfs(node, max_val = 0, min_val = inf):
            nonlocal ans
            if not node:
                return 
              
            max_val, min_val = max(max_val, node.val), min(min_val, node.val)
            dfs(node.left, max_val, min_val)
            dfs(node.right, max_val, min_val)
            ans = max(ans, max_val - min_val)
            
            
        dfs(root)
        return ans