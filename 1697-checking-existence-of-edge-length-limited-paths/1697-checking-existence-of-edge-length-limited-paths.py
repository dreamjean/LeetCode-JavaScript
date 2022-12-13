class UnionFind:
    def __init__(self, n: int):
        self.parent = [i for i in range(n)]
        
    def find(self, x):
        if x != self.parent[x]:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
      
    def isConnect(self, x, y):
        return self.find(x) == self.find(y)
      
    def union(self, x, y):
        rootX, rootY = self.find(x), self.find(y)
        if rootX != rootY:
            self.parent[rootX] = rootY
        

class Solution:
    def distanceLimitedPathsExist(self, n: int, edgeList: List[List[int]], queries: List[List[int]]) -> List[bool]:
        edgeList.sort(key=lambda x: x[2])
        queries = sorted([q + [i] for i, q in enumerate(queries)], key=lambda x: x[2])
        uf = UnionFind(n)
        ans = [None] * len(queries)
        j = 0
        
        for p, q, limit, i in queries:
            while j < len(edgeList) and edgeList[j][2] < limit:
                u, v, _ = edgeList[j]
                uf.union(u, v)
                j += 1
            ans[i] = uf.isConnect(p, q)
        return ans