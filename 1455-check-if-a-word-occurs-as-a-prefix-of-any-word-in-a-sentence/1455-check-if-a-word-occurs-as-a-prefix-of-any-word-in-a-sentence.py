class Solution:
    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:
        return next((i + 1 for i, word in enumerate(sentence.split(' ')) if word.startswith(searchWord)), -1)