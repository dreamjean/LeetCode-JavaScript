/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumsSplicedArray = function(nums1, nums2) {
    return Math.max(kacane(nums1, nums2), kacane(nums2, nums1));
};

const kacane = (nums1, nums2) => {
    const n = nums1.length;
    let [res, sum] = [0, 0];
    
    for (let i = 0; i < n; i++) {
        sum = Math.max(nums2[i] - nums1[i], sum + nums2[i] - nums1[i]);
        res = Math.max(res, sum);
    }
    
    return nums1.reduce((total, num) => total += num, res);
}