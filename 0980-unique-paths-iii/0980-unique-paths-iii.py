class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:    
        self.ans = 0
        m, n, empty = len(grid), len(grid[0]), 1
        dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
        
        for i in range(m):
            for j in range(n):
                if not grid[i][j]:
                    empty += 1
                elif grid[i][j] == 1:
                    x, y = i, j
                    
        def dfs(x, y, empty):
            if x < 0 or x >= m or y < 0 or y >= n or grid[x][y] < 0:
                return
            
            if (grid[x][y] == 2):
                self.ans += empty == 0
                return
              
            grid[x][y] = -2
            empty -= 1
            
            for dx, dy in dirs:
                dfs(dx + x, dy + y, empty)
            
            grid[x][y] = 0
            empty += 1
            
                    
        dfs(x, y, empty)
        
        return self.ans
        
        