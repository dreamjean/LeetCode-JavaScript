class Solution:
    def canBeEqual(self, target: List[int], arr: List[int]) -> bool:
        return str(sorted(target)) == str(sorted(arr))