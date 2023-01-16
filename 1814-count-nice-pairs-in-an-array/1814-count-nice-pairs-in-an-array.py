class Solution:
    def countNicePairs(self, nums: List[int]) -> int:
        count = Counter()
        
        for a in nums:
            b = int(str(a)[::-1])
            count[a - b] +=1
        return sum(x*(x-1) // 2 for x in count.values()) % (10**9 + 7)