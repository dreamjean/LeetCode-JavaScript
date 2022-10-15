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
              
            n = ListNode(node.val)
            seen[node] = n
            n.next = deepCopy(node.next, seen)
            n.random = deepCopy(node.random, seen)
            return n
          
          
        return deepCopy(head, {})
            