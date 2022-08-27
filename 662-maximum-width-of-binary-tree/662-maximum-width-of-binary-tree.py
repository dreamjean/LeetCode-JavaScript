# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        leave = [(root, 0)]
        res = 0
        while leave:
            res = max(res, leave[-1][1] - leave[0][1] + 1)
            row = []
            for node, index in leave:
                if node.left:
                    row.append((node.left, index * 2))
                if node.right:
                    row.append((node.right, index * 2 + 1))
            leave = row
        return res
        