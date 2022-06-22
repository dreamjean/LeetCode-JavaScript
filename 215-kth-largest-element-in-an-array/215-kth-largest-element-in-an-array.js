/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, k)
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

const quickSelect = (arr, start, end, k) => {
    const pivotIndex = partition(arr, start, end);
    const n = arr.length;
    
    if (k < n - pivotIndex) return quickSelect(arr, pivotIndex + 1, end, k);
    else if (k > n - pivotIndex) return quickSelect(arr, start, pivotIndex - 1, k);
    
    return arr[pivotIndex];
}
