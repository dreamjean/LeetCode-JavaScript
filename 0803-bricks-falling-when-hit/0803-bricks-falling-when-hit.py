class DSU:
    def __init__(self, n: int):
        self.parent = [i for i in range(n)]
        self.size = [1] * n
        
    def find(self, x):
        if x != self.parent[x]:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
      
    def componentSize(self, x):
        root = self.find(x)
        return self.size[root]
      
    def union(self, x, y):
        rootX, rootY = self.find(x), self.find(y)
        if rootX == rootY:
            return
        if self.size[rootX] < self.size[rootY]:
            self.parent[rootX] = rootY
            self.size[rootY] += self.size[rootX]
        else:
            self.parent[rootY] = rootX
            self.size[rootX] += self.size[rootY]
        

class Solution:
    def hitBricks(self, grid: List[List[int]], hits: List[List[int]]) -> List[int]:
        self.grid = grid
        self.rows, self.cols, m = len(grid), len(grid[0]), len(hits)
        ds = DSU(self.rows * self.cols + 1)
        ans = [0] * m
        
        for x, y in hits:
            if grid[x][y] == 1:
                grid[x][y] = 2
                
        for i in range(self.rows):
            for j in range(self.cols):
                if grid[i][j] == 1:
                    self.unionAround(i, j, ds)
                    
        for i in range(m - 1, -1, -1):
            x, y = hits[i]
            if grid[x][y] == 2:
                grid[x][y] = 1
                origin_bricks = ds.componentSize(0)
                self.unionAround(x, y, ds)
                curr_bricks = ds.componentSize(0)
                ans[i] = max(0, curr_bricks - origin_bricks - 1)
                orgin_bricks = curr_bricks
                
        return ans
        
                
    def mark(self, x, y):
        return x * self.cols + y + 1
    
    def unionAround(self, x, y, ds):
        dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
        curr_mark = self.mark(x, y)
        
        if x == 0:
            ds.union(0, curr_mark)
            
        for dx, dy in dirs:
            nx, ny = dx + x, dy + y
            if 0 <= nx < self.rows and 0 <= ny < self.cols and self.grid[nx][ny] == 1:
                ds.union(curr_mark, self.mark(nx, ny))