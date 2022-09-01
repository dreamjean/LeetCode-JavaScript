class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        n = len(mat)
        return sum(mat[i][j] for i in range(n) for j in range(n) if i - j == 0 or i + j == n - 1)