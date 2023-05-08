class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        n = len(mat)
        ans = 0
        for i in range(n):
            ans += mat[i][i] + mat[i][n - 1 - i]
            if i * 2 == n - 1:
                ans -= mat[i][i]
        return ans