class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.count = n
        
    def find(self, x):
        if x != self.parent[x]:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x] 
      
    def componentSize(self):
        return self.count
      
    def union(self, x, y):
        root_x, root_y = self.find(x), self.find(y)
        if root_x == root_y:
            return
        self.parent[root_x] = root_y
        self.count -= 1
        

class Solution:
    def makeConnected(self, n: int, connections: List[List[int]]) -> int:
        if len(connections) < n - 1:
            return -1
        
        uf = UnionFind(n)
        for a, b in connections:
            uf.union(a, b)
        return uf.componentSize() - 1