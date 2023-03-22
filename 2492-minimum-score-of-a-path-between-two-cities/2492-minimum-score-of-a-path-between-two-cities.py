class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        
    def find(self, x):
        if x != self.parent[x]:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
      
    def isConnected(self, x, y):
        return self.find(x) == self.find(y)
      
    def union(self, x, y):
        root_x, root_y = self.find(x), self.find(y)
        if root_x == root_y:
            return
        self.parent[root_x] = root_y
        

class Solution:
    def minScore(self, n: int, roads: List[List[int]]) -> int:
        uf = UnionFind(n + 1)
        ans = float('inf')
        for a, b, _ in roads:
            uf.union(a, b)
        for a, _, distance in roads:
            if uf.isConnected(1, a):
                ans = min(ans, distance)
        return ans