class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.count = n
        
    def find(self, x):
        if x != self.parent[x]:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def united(self):
        return self.count == 2
    
    def union(self, x, y):
        root_x, root_y = self.find(x), self.find(y)
        if root_x == root_y:
            return False
        self.parent[root_x] = root_y
        self.count -= 1
        return True
      

class Solution:
    def maxNumEdgesToRemove(self, n: int, edges: List[List[int]]) -> int:
        ufa = UnionFind(n + 1)
        ufb = UnionFind(n + 1)
        count = 0
        for t, u, v in sorted(edges, reverse=True):
            if t == 3:
                count += ufa.union(u, v) | ufb.union(u, v)
            elif t == 2:
                count += ufb.union(u, v)
            else:
                count += ufa.union(u, v)
        return len(edges) - count if ufa.united() and ufb.united() else -1