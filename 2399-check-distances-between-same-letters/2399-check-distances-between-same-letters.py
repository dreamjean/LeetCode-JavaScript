class Solution:
    def checkDistances(self, s: str, distance: List[int]) -> bool:
        for i, ch in enumerate(s):
            index = ord(s[i]) - ord('a')
            next_pos = i + distance[index] + 1
            if next_pos >= len(s) or s[i] != s[next_pos]:
                return False
            distance[index] = -1
        return True
        