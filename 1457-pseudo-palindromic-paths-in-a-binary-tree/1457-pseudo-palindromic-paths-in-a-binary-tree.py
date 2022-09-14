# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pseudoPalindromicPaths (self, root: Optional[TreeNode]) -> int:
        def helper(node, count=0):
            if not node:
                return 0
            count ^= 1 << node.val
            if node.left == node.right and count & (count-1) == 0:
                return 1
            return helper(node.left, count) + helper(node.right, count)
          
          
        return helper(root)