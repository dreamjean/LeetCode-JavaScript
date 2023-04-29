class Solution:
    def replaceNonCoprimes(self, nums: List[int]) -> List[int]:
        stack = []
        for num in nums:
            while stack:
                g = math.gcd(num, stack[-1])
                if g == 1:
                    break
                num *= stack.pop() // g
            stack.append(num)
        return stack