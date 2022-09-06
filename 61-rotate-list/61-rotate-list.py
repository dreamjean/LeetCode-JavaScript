# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not k or not head or not head.next:
            return head
          
        first, second, n = head, head, 1
        while second.next:
            n += 1
            second = second.next
            
        for i in range(n - k%n - 1):
            first = first.next
            
        second.next = head
        head = first.next
        first.next = None
        
        return head