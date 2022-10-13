# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeInBetween(self, list1: ListNode, a: int, b: int, list2: ListNode) -> ListNode:
        dummy = ListNode(-1, list1)
        first, second = dummy, dummy
        
        for _ in range(b - a + 1):
            second = second.next
            
        for _ in range(a):
            first = first.next
            second = second.next
            
        first.next = list2
        while first.next:
            first = first.next
            
        first.next = second.next
        
        return dummy.next