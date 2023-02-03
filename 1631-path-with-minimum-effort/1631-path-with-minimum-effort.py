class UnionFind:
    def __init__(self, n: int):
        self.parent = list(range(n))

    def find(self, x):
        if (x != self.parent[x]):
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def connected(self, x, y):
        return self.find(x) == self.find(y)

    def union(self, x, y):
        rootX, rootY = self.find(x), self.find(y)
        if rootX == rootY:
            return
        if rootX < rootY:
            self.parent[rootX] = rootY
        else:
            self.parent[rootY] = rootX


class Solution:
    def minimumEffortPath(self, heights: List[List[int]]) -> int:
        m, n = len(heights), len(heights[0])
        uf = UnionFind(m * n)
        edges = []
        
        for r in range(m):
            for c in range(n):
                curr = heights[r][c]
                if r:
                    edges.append([abs(curr - heights[r - 1][c]), r * n + c, (r - 1) * n + c])
                if c:
                    edges.append([abs(curr - heights[r][c - 1]), r * n + c, r * n + c - 1])
        
        edges.sort()
        for diff, pos1, pos2 in edges:
            uf.union(pos1, pos2)
            if uf.connected(0, m * n - 1):
                return diff
        
        return 0
          