class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        arr1 = version1.split('.')
        arr2 = version2.split('.')
        len1, len2 = len(arr1), len(arr2)
        for i in range(max(len1, len2)):
            v1 = int(arr1[i]) if i < len1 else 0
            v2 = int(arr2[i]) if i < len2 else 0
            if v1 == v2: continue
            return 1 if v1 > v2 else -1
        return 0