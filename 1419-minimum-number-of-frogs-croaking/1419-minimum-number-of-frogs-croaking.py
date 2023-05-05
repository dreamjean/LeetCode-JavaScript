class Solution:
    def minNumberOfFrogs(self, croakOfFrogs: str) -> int:
        count = [0] * 5
        croak_pos = {'c': 0, 'r': 1, 'o': 2, 'a': 3, 'k': 4}
        frogs = max_frogs = 0
        for ch in croakOfFrogs:
            pos = croak_pos[ch]
            count[pos] += 1
            if pos == 0:
                frogs += 1
                max_frogs = max(max_frogs, frogs)
            else:
                count[pos - 1] -= 1
                if count[pos - 1] < 0:
                    return -1                
                if pos == 4:
                    frogs -= 1
        return max_frogs if frogs == 0 else -1
      
