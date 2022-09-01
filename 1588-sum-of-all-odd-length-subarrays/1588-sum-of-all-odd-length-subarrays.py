class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        return sum(((i+1) * (len(arr)-i) + 1) // 2 * num for i, num in enumerate(arr))