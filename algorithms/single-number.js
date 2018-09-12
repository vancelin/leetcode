/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var nums = nums.sort();
    var number = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            i++;
        } else {
            number = nums[i];
        }
    }
    return number;
};