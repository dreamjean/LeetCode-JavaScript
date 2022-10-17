class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        cnt = [0] * 26
        for char in sentence:
            cnt[ord(char) - ord('a')] += 1
        return all(x > 0 for x in cnt)