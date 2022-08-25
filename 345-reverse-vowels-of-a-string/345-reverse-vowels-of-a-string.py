class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = re.findall('(?i)[aeiou]', s)
        return re.sub('(?i)[aeiou]', lambda m: vowels.pop(), s)