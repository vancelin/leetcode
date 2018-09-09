/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var number = 0;
    for(i = 0; i < nums.length; i++) {
        if (nums[i] != nums[number]) {
            number++
            nums[number] = nums[i];
        }
    }

    number +=1;
    return number;
};
