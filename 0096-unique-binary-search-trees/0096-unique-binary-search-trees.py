class Solution:
    def numTrees(self, n: int) -> int:
        ans = 1
        for i in range(n):
            ans = ans * 2 * (2*i + 1) // (i + 2)
        return ans