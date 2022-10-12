# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def numComponents(self, head: Optional[ListNode], nums: List[int]) -> int:
        seen = set(nums)
        cnt = 0
        while head:
            if head.val in seen and (not head.next or head.next.val not in seen):
                cnt += 1
            head = head.next
        return cnt