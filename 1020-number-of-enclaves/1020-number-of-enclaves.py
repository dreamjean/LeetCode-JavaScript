class Solution:
    def numEnclaves(self, grid: List[List[int]]) -> int:
        def fill(r, c):
            if r < 0 or c < 0 or r >= m or c >= n or grid[r][c] == 0:
                return
            grid[r][c] = 0
            for (x, y) in [(r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1)]:
                fill(x, y)
                
                
        m, n = len(grid), len(grid[0])
        for i in range(m):
            fill(i, 0)
            fill(i, n - 1)
        for j in range(n):
            fill(0, j)
            fill(m - 1, j)
        return sum(grid[i][j] for i in range(m) for j in range(n))