# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def merge(a, b):
            if not a:
                return b
            if not b:
                return a
            if a.val < b.val:
                a.next = merge(a.next, b)
                return a
            
            b.next = merge(a, b.next)
            return b
          
          
        if not head or not head.next:
            return head
        
        prev, slow, fast = None, head, head
        
        while fast and fast.next:
            prev = slow
            slow = slow.next
            fast = fast.next.next
        
        if prev:
            prev.next = None
            
        first = self.sortList(head)
        second = self.sortList(slow)
        
        return merge(first, second)