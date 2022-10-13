# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        dummy1, dummy2 = ListNode(0), ListNode(0)
        first, second = dummy1, dummy2
        while head:
            if head.val < x:
                first.next = head
                first = head
            else:
                second.next = head
                second = head
            head = head.next
        first.next = dummy2.next
        second.next = None
        return dummy1.next