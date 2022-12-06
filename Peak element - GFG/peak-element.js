//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let a = new Array(n);
        let tmp = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            a[i] = input_ar1[i];
            tmp[i] = a[i];
        }
        let obj = new Solution();
        let A = obj.peakElement(tmp, n);
        let f=0;
        if(n==1)
		    f=1;
		else if(A==0 && a[0]>=a[1])
		    f=1;
		else if(A==n-1 && a[n-1]>=a[n-2])
		    f=1;
		else if(a[A] >=a[A+1] && a[A]>= a[A-1])
		    f=1;
		else
		    f=0;
		console.log(f);
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    
    peakElement(arr, n)
    {
        // code here
        let [l, r] = [0, n - 1];
        while (l <= r) {
            const mid = (l + r) >>> 1;
            if (arr[mid] < arr[mid + 1]) l = mid + 1;
            else r = mid - 1;
        }
        
        return l;
    }
}