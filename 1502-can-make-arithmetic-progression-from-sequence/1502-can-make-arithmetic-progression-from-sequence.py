class Solution:
    def canMakeArithmeticProgression(self, arr: List[int]) -> bool:
        arr = sorted(arr)
        for i in range(1, len(arr) - 1):
            if arr[i] - arr[i - 1] != arr[i + 1] - arr[i]:
                return False
        return True