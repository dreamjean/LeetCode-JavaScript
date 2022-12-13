class UnionFind:
    def __init__(self, n: int):
        self.parent = [i for i in range(n)]
        self.count = n
    
    
    def find(self, x):
        if x != self.parent[x]:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
      
    def union(self, x, y):
        rootX, rootY = self.find(x), self.find(y)
        if rootX != rootY:
            self.parent[rootX] = rootY
            self.count -= 1
        

class Solution:
    def numSimilarGroups(self, strs: List[str]) -> int:
        def isSimilar(str1, str2):
            count = 0
            for i in range(len(str1)):
               if str1[i] != str2[i]:
                    count += 1
                    if count > 2:
                        return False
            return True
          
          
        n = len(strs)
        uf = UnionFind(n)
        
        for i in range(n):
            for j in range(i + 1, n):
                if isSimilar(strs[i], strs[j]):
                    uf.union(i, j)
                    
        return uf.count
      
      
        