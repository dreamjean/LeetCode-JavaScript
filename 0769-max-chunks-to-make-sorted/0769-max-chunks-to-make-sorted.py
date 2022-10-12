class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        return sum(i == v for i, v in enumerate(accumulate(arr, max)))
        