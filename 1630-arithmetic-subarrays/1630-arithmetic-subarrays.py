class Solution:
    def checkArithmeticSubarrays(self, nums: List[int], l: List[int], r: List[int]) -> List[bool]:
        def check(sub):
            sub.sort()
            for i in range(1, len(sub)):
                if sub[i] - sub[i-1] != sub[1] - sub[0]:
                    return False
            return True
          
          
        return [check(nums[l[i]:r[i]+1]) for i in range(len(l))]