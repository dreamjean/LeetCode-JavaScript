class Solution:
    def minFallingPathSum(self, matrix: List[List[int]]) -> int:
        n = len(matrix)
        
        for i in range(1, n):
            for j in range(n):
                matrix[i][j] += min(
                  matrix[i - 1][max(0, j - 1)],
                  matrix[i - 1][j],
                  matrix[i - 1][min(j + 1, n - 1)]
                )
        return min(matrix[-1])
      
   