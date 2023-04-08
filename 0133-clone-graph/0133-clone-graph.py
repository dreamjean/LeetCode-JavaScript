"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        def dfs(node):
            if not node:
                return node
            if node.val not in d:
                d[node.val] = Node(node.val)
                d[node.val].neighbors = [dfs(neighbor) for neighbor in node.neighbors]
            return d[node.val]
        
        
        d = defaultdict()
        return dfs(node)
        