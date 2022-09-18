class Solution:
    def largestIsland(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        sizes = [0, 0]
        res = 0
        
        def get(i, j):
            return 0 if i < 0 or i >= m or j < 0 or j >= n else grid[i][j]
          
          
        def paint(i, j, clr):
            if get(i, j) != 1:
                return 0
            grid[i][j] = clr
            return 1 + paint(i + 1, j, clr) + paint(i - 1, j, clr) + paint(i, j + 1, clr) + paint(i, j - 1, clr)
      
      
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    sizes.append(paint(i, j, len(sizes)))
      
        for i in range(m):
            for j in range(n):
                if not grid[i][j]:
                    res = max(res, 1 + sum(sizes[c] for c in {get(i + 1, j), get(i - 1, j), get(i, j + 1), get(i, j - 1)}))
        return m*n if not res else res         
                    
        