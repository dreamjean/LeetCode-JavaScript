class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        m, n = len(heights), len(heights[0])
        dirs = [(1, 0), (0, 1), (-1, 0), (0, -1)]
        pacific = set()
        atlantic = set()
        
        def dfs(r, c, ocean):
            ocean.add((r, c))
            for dx, dy in dirs:
                x, y = dx + r, dy + c
                if 0 <= x < m and 0 <= y < n and (x, y) not in ocean and heights[x][y] >= heights[r][c]:
                    dfs(x, y, ocean)
        
        
        for i in range(m):
            dfs(i, 0, pacific)
            dfs(i, n - 1, atlantic)
        
        for j in range(n):
            dfs(0, j, pacific)
            dfs(m - 1, j, atlantic)
          
        return list(pacific.intersection(atlantic))
         