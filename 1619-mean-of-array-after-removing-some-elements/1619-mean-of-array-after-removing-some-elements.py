class Solution:
    def trimMean(self, arr: List[int]) -> float:
        n = len(arr)
        skip = n // 20
        return sum(sorted(arr)[skip:-skip]) / (n - 2*skip)