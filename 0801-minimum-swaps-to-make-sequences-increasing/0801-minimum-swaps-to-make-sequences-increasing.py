class Solution:
    def minSwap(self, nums1: List[int], nums2: List[int]) -> int:
        n = len(nums1)
        swap, not_swap = 1, 0
        for i in range(1, n):
            swap2, not_swap2 = n, n
            if nums1[i - 1] < nums1[i] and nums2[i - 1] < nums2[i]:
                not_swap2 = not_swap
                swap2 = swap + 1
            if nums1[i - 1] < nums2[i] and nums2[i - 1] < nums1[i]:
                not_swap2 = min(not_swap2, swap)
                swap2 = min(swap2, not_swap + 1)
            swap, not_swap = swap2, not_swap2
        return min(swap, not_swap)
                
                