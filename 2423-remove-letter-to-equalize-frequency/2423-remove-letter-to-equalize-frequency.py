class Solution:
    def equalFrequency(self, word: str) -> bool:
        count = Counter(word)
        for ch in word:
            count[ch] -= 1
            if count[ch] == 0:
                count.pop(ch)
            if len(set(count.values())) == 1:
                return True
            count[ch] += 1
        return False