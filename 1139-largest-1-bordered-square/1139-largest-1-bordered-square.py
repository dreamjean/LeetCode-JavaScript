class Solution:
    def largest1BorderedSquare(self, grid: List[List[int]]) -> int:
        m, n, count = len(grid), len(grid[0]), 0
        rows = [[0] * n for _ in range(m)]
        cols = [[0] * n for _ in range(m)]
        
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    rows[i][j] = 1 if j == 0 else rows[i][j - 1] + 1
                    cols[i][j] = 1 if i == 0 else cols[i - 1][j] + 1
                    
        for i in range(m - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                small = min(rows[i][j], cols[i][j])
                while small > count:
                    if rows[i-small+1][j] >= small and cols[i][j-small+ 1] >= small:
                        count = small
                    small -= 1
                    
        return count * count
        