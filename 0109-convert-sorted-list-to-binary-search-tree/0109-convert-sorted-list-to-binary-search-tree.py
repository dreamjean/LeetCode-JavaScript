# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedListToBST(self, head: Optional[ListNode]) -> Optional[TreeNode]:
        if not head:
            return None
        if not head.next:
            return TreeNode(head.val)
        first, second, fast = None, head, head
        while fast and fast.next:
            first = second
            second = second.next
            fast = fast.next.next
        first.next = None
        
        node = TreeNode(second.val)
        node.left = self.sortedListToBST(head)
        node.right = self.sortedListToBST(second.next)
        return node
            
        