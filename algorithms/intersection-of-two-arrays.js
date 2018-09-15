/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var number = new Set();
    for (var i = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) > -1) {
            number.add(nums1[i]);
        }
    }
    return Array.from(number); 
};