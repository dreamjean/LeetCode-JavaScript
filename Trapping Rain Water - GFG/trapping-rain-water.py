
class Solution:
    def trappingWater(self, arr,n):
        #Code here
        l, r = 0, len(arr) - 1
        max_left = max_right = ans = 0
        while l <= r:
            max_left = max(max_left, arr[l])
            max_right = max(max_right, arr[r])
            if max_left < max_right:
                ans += max_left - arr[l]
                l += 1
            else:
                ans += max_right - arr[r]
                r -= 1
        return ans

#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math



def main():
        T=int(input())
        while(T>0):
            
            n=int(input())
            
            arr=[int(x) for x in input().strip().split()]
            obj = Solution()
            print(obj.trappingWater(arr,n))
            
            
            T-=1


if __name__ == "__main__":
    main()



# } Driver Code Ends