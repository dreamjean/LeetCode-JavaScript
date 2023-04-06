class Solution:
    def closedIsland(self, grid: List[List[int]]) -> int:
        def dfs(r, c):
            if r < 0 or c < 0 or r >= m or c >= n:
                return False
            if grid[r][c] == 1:
                return True
            grid[r][c] = 1
            res = True
            for (x, y) in [(r, c + 1), (r, c - 1), (r + 1, c), (r - 1, c)]:
                if not dfs(x, y):
                    res = False
            return res
          
        
        m, n, count = len(grid), len(grid[0]), 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 0:
                    count += dfs(i, j)
        return count