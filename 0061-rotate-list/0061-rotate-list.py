# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not k or not head or not head.next:
            return head
          
        p1, p2, n = head, head, 1
        while p2.next:
            n += 1
            p2 = p2.next
        
        for _ in range(1, n - k%n):
            p1 = p1.next
            
        p2.next = head
        head = p1.next
        p1.next = None
      
        return head