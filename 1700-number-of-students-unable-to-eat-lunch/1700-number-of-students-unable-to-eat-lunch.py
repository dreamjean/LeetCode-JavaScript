class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        n, i = len(students), 0
        count = [0] * 2
        
        for s in students:
            count[s] += 1
        
        while i < n and count[sandwiches[i]]:
            count[sandwiches[i]] -= 1
            i += 1
        return n - i
        