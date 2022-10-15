# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        def cut(node):
            slow = fast = node
            while fast and fast.next:
                slow, fast = slow.next, fast.next.next
            p = slow.next
            slow.next = None
            return p
          
          
        def reverse(node):
            prev = None
            while node:
                node.next, prev, node = prev, node, node.next
            return prev
          
          
        def merge(a, b):
            a_next = b_next = None
            while b:
                a_next = a.next
                b_next = b.next
                a.next = b
                b.next = a_next
                a = a_next
                b = b_next
                
                
        middle = cut(head)
        second = reverse(middle)
        merge(head, second)