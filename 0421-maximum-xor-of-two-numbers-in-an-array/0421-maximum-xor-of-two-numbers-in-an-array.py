class Solution:
    def findMaximumXOR(self, nums: List[int]) -> int:
        ans = mask = 0
        for i in range(31, -1, -1):
            mask |= 1<<i
            seen = set([num&mask for num in nums])
            
            temp = ans | 1<<i
            for prefix in seen:
                if prefix^temp in seen:
                    ans = temp
                    break
        return ans