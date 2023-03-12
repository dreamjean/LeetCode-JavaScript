"""
# Definition for a Node.
class Node:
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child
"""

class Solution:
    def flatten(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head:
            return None
          
        node = head
        while node:
            if node.child:
                curr = node.child
                while curr.next:
                    curr = curr.next
                if node.next:
                    curr.next = node.next
                    node.next.prev = curr
                node.next = node.child
                node.next.prev = node
                node.child = None
            node = node.next
        return head
                