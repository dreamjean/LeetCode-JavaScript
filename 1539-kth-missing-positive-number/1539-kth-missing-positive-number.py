class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
        seen = set(arr)
        ans = 0
        while k:
            ans += 1
            if ans not in seen:
                k -= 1
        return ans