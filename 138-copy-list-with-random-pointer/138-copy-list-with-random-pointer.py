"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        def deepCopy(node, seen):
            if not node:
                return None
            if node in seen:
                return seen[node]
            copy = Node(node.val)
            seen[node] = copy
            copy.next = deepCopy(node.next, seen)
            copy.random = deepCopy(node.random, seen)
            return copy
          
          
        return deepCopy(head, {})
        