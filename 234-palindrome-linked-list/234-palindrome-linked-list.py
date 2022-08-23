# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        slow, fast, reverse = head, head, None
        while fast and fast.next:
            fast = fast.next.next
            slow.next, reverse, slow = reverse, slow, slow.next
        if fast:
            slow = slow.next
        while slow and reverse:
            if slow.val != reverse.val:
                return False
            slow, reverse = slow.next, reverse.next
        return not reverse