# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        ans = float("-inf")
        def getMaxGain(node):
            nonlocal ans
            if not node:
                return 0
            left_gain = max(0, getMaxGain(node.left))
            right_gain = max(0, getMaxGain(node.right))
            ans = max(ans, node.val + left_gain + right_gain)
            return node.val + max(left_gain, right_gain)
          
          
        getMaxGain(root)
        return ans