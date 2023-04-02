class Solution:
    def prevPermOpt1(self, arr: List[int]) -> List[int]:
        n, j = len(arr), -1
        for i in range(n - 1, -1, -1):
            if arr[i] < arr[i - 1]:
                j = i - 1
                break
        if j == -1:
            return arr
        for i in range(n - 1, -1, -1):
            if arr[i] < arr[j] and arr[i] != arr[i - 1]:
                arr[i], arr[j] = arr[j], arr[i]
                break
        return arr
        