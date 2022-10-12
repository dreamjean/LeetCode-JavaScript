# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def allPossibleFBT(self, n: int) -> List[Optional[TreeNode]]:
        @lru_cache(None)
        def helper(n):
            if n == 1:
                return [TreeNode(0)]
              
            ans = []
            for i in range(1, n, 2):
                left = helper(i)
                right = helper(n - 1 - i)
                for l in left:
                    for r in right:
                        node = TreeNode(0, l, r)
                        ans.append(node)
            return ans
          
          
        return [] if not n % 2 else helper(n)