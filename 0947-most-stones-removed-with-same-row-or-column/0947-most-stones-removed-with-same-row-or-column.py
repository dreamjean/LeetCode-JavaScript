class Solution:
    def removeStones(self, stones: List[List[int]]) -> int:
        parent = {}
        def find(x):
            if not x in parent:
                parent[x] = x
            elif x != parent[x]:
                parent[x] = find(parent[x])
            return parent[x]
        
        
        for u, v in stones:
            parent[find(u)] = find(~v)
        return len(stones) - len({find(x) for x in parent})
            