# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestUnivaluePath(self, root: Optional[TreeNode]) -> int:
        self.path = 0
        def helper(node, val=-1):
            if not node:
                return 0
            left = helper(node.left, node.val)
            right = helper(node.right, node.val)
            self.path = max(self.path, left + right)
            return max(left, right) + 1 if node.val == val else 0
          
        
        helper(root)
        return self.path