# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        p1 = dummy
        for _ in range(left - 1):
            p1 = p1.next
        p2 = p1.next
        for _ in range(left, right):
            tmp = p2.next
            p2.next = tmp.next
            tmp.next = p1.next
            p1.next = tmp
        return dummy.next