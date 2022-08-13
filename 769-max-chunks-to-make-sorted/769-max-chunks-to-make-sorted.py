class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        return sum(v == i for i, v in enumerate(accumulate(arr, max)))
        