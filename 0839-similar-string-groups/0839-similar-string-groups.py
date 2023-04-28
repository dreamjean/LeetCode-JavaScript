class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.count = n
    
    def find(self, x):
        if x != self.parent[x]:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
      
    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)
        if root_x == root_y:
            return
        self.parent[root_x] = root_y
        self.count -= 1
        

class Solution:
    def numSimilarGroups(self, strs: List[str]) -> int:
        def isSimilar(s1, s2):
            count = sum(x != y for x, y in zip(s1, s2))
            return count == 0 or count == 2
      
        n = len(strs)
        uf = UnionFind(n)
        
        for i in range(n - 1):
            for j in range(i + 1, n):
                if isSimilar(strs[i], strs[j]):
                    uf.union(i, j)
        
        return uf.count