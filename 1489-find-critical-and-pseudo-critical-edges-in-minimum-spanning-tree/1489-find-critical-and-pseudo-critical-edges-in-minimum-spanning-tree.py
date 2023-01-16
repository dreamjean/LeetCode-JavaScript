class UnionFind:
    def __init__(self, n: int):
        self.parent = list(range(n))
        self.size = [1] * n
        self.count = n
        
    def find(self, x):
        if x != self.parent[x]:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def getCount(self):
        return self.count
      
    def union(self, x, y):
        rootX, rootY = self.find(x), self.find(y)
        if rootX == rootY:
            return False
          
        if self.size[rootX] < self.size[rootY]:
            self.parent[rootX] = rootY
            self.size[rootY] += self.size[rootX]
        else:
            self.parent[rootY] = rootX
            self.size[rootX] += self.size[rootY]
        
        self.count -= 1
        return True

class Solution:
    def findCriticalAndPseudoCriticalEdges(self, n: int, edges: List[List[int]]) -> List[List[int]]:
        def buildMST(skip=-1, pick=-1):
            uf = UnionFind(n)
            weight = 0
            
            if pick > -1:
                u, v, w, _ = edges[pick]
                uf.union(u, v)
                weight += w
                
            for i, (u, v, w, _) in enumerate(edges):
                if i == skip: 
                    continue
                if uf.union(u, v):
                    weight += w
            return weight if uf.getCount() == 1 else float('inf')
          
          
        edges = sorted([edge + [i] for i, edge in enumerate(edges)], key=lambda x:x[2])
        mst = buildMST()
        critical = [] 
        pseudo_critical = []

        for i in range(len(edges)):
            if mst < buildMST(i, -1):
                critical.append(edges[i][3])
            elif mst == buildMST(-1, i):
                pseudo_critical.append(edges[i][3])
        return [critical, pseudo_critical]