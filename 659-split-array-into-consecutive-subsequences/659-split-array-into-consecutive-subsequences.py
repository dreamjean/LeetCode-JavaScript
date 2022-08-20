class Solution:
    def isPossible(self, nums: List[int]) -> bool:
        freq = Counter(nums)
        end = Counter()
        for num in nums:
            if freq[num] == 0: continue
            freq[num] -= 1
            if end[num - 1]:
                end[num - 1] -= 1
                end[num] += 1
            elif freq[num + 1] and freq[num + 2]:
                freq[num + 1] -= 1
                freq[num + 2] -= 1
                end[num + 2] += 1
            else: return False
        return True