class Solution:
    def reverseVowels(self, s: str) -> str:
        reg = '(?i)[aeiou]'
        vowels = re.findall(reg, s)
        return re.sub(reg, lambda m:vowels.pop(), s)