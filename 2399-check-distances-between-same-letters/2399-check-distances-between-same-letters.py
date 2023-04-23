class Solution:
    def checkDistances(self, s: str, distance: List[int]) -> bool:
        prev_pos = [0] * 26
        for i, ch in enumerate(s):
            idx = ord(ch) - ord('a')
            if prev_pos[idx] and i - prev_pos[idx] != distance[idx]:
                return False
            prev_pos[idx] = i + 1
        return True