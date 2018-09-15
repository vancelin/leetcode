/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var minArr = (nums1.length > nums2.length) ? nums2 : nums1;
    var maxArr = (nums1.length > nums2.length) ? nums1 : nums2;
    var number = [];

    for (var i = 0; i < minArr.length; i++) {
        if (maxArr.indexOf(minArr[i]) > -1) {
            maxArr[maxArr.indexOf(minArr[i])] = null;
            number.push(minArr[i]);
        }
    }
    
    return number;
    
};