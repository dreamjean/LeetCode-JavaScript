class UnionFind:
    def __init__(self, n: int):
        self.parent = list(range(n))
        self.size = [0] * n
        
    def find(self, x):
        while x != self.parent[x]:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x
  
    def isConnect(self, x, y):
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
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        uf = UnionFind(n)
        
        for u, v in edges:
            uf.union(u, v)
        
        return uf.isConnect(source, destination)
        