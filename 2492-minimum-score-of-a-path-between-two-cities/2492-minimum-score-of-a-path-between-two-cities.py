class UnionFind:
    def __init__(self, n: int):
        self.parent = list(range(n))
        self.rank = [0] * n
        
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
        if self.rank[rootX] > self.rank[rootY]:
            rootX, rootY = rootY, rootX
        self.parent[rootX] = rootY
        
        
class Solution:
    def minScore(self, n: int, roads: List[List[int]]) -> int:
        uf = UnionFind(n + 1)
        root = uf.find(1)
        ans = float('inf')
        
        for a, b, _ in roads:
            uf.union(a, b)
            
        for a, b, dist in roads:
            if uf.connected(root, a) or uf.connected(root, b):
                ans = min(ans, dist)
        return ans