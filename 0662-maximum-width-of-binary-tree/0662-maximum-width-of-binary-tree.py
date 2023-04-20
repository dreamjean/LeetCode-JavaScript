# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        q, ans = [[root, 1]], 1
        while q:
            tmp = []
            ans = max(ans, q[-1][1] - q[0][1] + 1)
            for node, i in q:
                if node.left:
                    tmp.append([node.left, i * 2])
                if node.right:
                    tmp.append([node.right, i * 2 + 1])
            q = tmp
        return ans
      