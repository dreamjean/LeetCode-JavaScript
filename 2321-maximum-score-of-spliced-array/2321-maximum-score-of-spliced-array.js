/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumsSplicedArray = function(nums1, nums2) {
    return Math.max(kadane(nums1, nums2), kadane(nums2, nums1));
};

const kadane = (nums1, nums2) => {
    let [res, sum] = [0, 0];
    
    for (let i = 0; i < nums1.length; i++) {
        const diff = nums2[i]- nums1[i];
        sum = Math.max(diff, sum + diff);
        res = Math.max(res, sum);
    }
    
    return nums1.reduce((total, num) => total += num, res);
}