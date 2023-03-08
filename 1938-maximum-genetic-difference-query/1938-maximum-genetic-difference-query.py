class Trie:
    def __init__(self):
        self.root = {}
        
    def insert(self, num, d):
        node = self.root
        for i in range(17, -1, -1):
            bit = (num >> i) & 1
            if bit not in node:
                node[bit] = {"cnt": 0}
            node = node[bit]
            node["cnt"] += d
            
    def find(self, num):
        node, ans = self.root, 0
        for i in range(17, -1, -1):
            bit = (num >> i) & 1
            if 1-bit in node and node[1-bit]["cnt"] > 0:
                ans |= (1 << i)
                node = node[1-bit]
            else:
                node = node[bit]
        return ans
      
    
class Solution:
    def maxGeneticDifference(self, parents: List[int], queries: List[List[int]]) -> List[int]:
        m, n, root = len(parents), len(queries), -1
        graph, queriesByNode = [[] for _ in range(m)], [[] for _ in range(m)]
        ans = [-1] * n
        trie = Trie()
        
        for i, p in enumerate(parents):
            if p == -1:
                root = i
            else:
                graph[p].append(i)
                
        for i, [node, val] in enumerate(queries):
            queriesByNode[node].append((val, i))
            
        def dfs(cur):
            trie.insert(cur, 1)
            for val, i in queriesByNode[cur]:
                ans[i] = trie.find(val)
            for nxt in graph[cur]:
                dfs(nxt)
            trie.insert(cur, -1)
            
        
        dfs(root)
        return ans