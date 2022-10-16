# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        def changeToNumber(p):
            num = 0
            while p:
                num = num*10 + p.val
                p = p.next
            return num
          
          
        total = changeToNumber(l1) + changeToNumber(l2)
        dummy = ListNode(0)
        curr = dummy
        for c in str(total):
            curr.next = ListNode(int(c))
            curr = curr.next
        return dummy.next
        