/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const n = nums.length;
    const finalIdx = n - k;
    let [low, high] = [0, n - 1];
    
    while (low <= high) {
        const pivotIdx = partition(nums, low, high);
        
        if (pivotIdx === finalIdx) return nums[pivotIdx];
        
        if (pivotIdx < finalIdx) low = pivotIdx + 1;
        else high = pivotIdx - 1;
    }
};

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

const partition = (arr, start, end) => {
    const pivot = arr[end];
    let [i, j] = [start, end - 1];
    while (i <= j) {
        while (arr[i] < pivot) i++;
        while (arr[j] > pivot) j--;
    
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    
    swap(arr, i, end);
    
    return i;
}
