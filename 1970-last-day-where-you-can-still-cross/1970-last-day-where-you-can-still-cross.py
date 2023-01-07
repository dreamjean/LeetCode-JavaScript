class UnionFind:
    def __init__(self, n: int):
        self.parent = list(range(n))
        self.size = [1] * n

    def find(self, x):
        if x != self.parent[x]:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def connected(self, x, y):
        return self.find(x) == self.find(y)

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
    def latestDayToCross(self, row: int, col: int, cells: List[List[int]]) -> int:
        def mark(x, y):
            return x * col + y + 1
          
        cells = [[x - 1, y - 1] for x, y in cells]
        dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
        grid = [[1] * col for _ in range(row)]
        uf = UnionFind(row * col + 2)
        last = row * col + 1
        
        for i in range(len(cells) - 1, -1, -1):
            x, y = cells[i]
            grid[x][y] = 0
            pos = mark(x, y)
            
            for dx, dy in dirs:
                nx, ny = dx + x, dy + y
                if 0 <= nx < row and 0 <= ny < col and grid[nx][ny] == 0:
                    uf.union(pos, mark(nx, ny))
            
            if x == 0:
                uf.union(0, pos)
            if x == row - 1:
                uf.union(last, pos)
            if uf.connected(0, last):
                return i
        return 0
                    