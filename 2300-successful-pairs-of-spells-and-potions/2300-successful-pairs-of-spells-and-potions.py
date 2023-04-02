class Solution:
    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:
        def search(spell, potions, success):
            n = len(potions)
            lo, hi = 0, n - 1
            while lo <= hi:
                mid = lo + (hi - lo) // 2
                if spell * potions[mid] < success:
                    lo = mid + 1
                else:
                    hi = mid - 1
            return n - lo
          
          
        potions = sorted(potions)
        return [search(spell, potions, success) for spell in spells]