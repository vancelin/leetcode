var rotate = function(nums, k) {
    var n = k % nums.length;
    for (i = 0; i < n; i++) {
        nums.unshift(nums.pop());
    }
};