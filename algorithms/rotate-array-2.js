/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    if (n <= 1) {
        return;
    }
    var k = k % n;
    var targetCache = 0;
    var currentCache = 0;
    for (var i = 0; i < k; i++) {
        for (var j = 0; j < n; j++) {
            if (j == n - 1) {
                nums[0] = currentCache;
                break;
            }
            if (j == 0) {
                currentCache = nums[j];
            }
            targetCache = nums[j + 1];
            nums[j + 1] = currentCache;
            currentCache = targetCache;
        }
    }
};