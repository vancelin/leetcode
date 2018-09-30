/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle.length) {
        return 0;
    }
    let l = needle.length;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.slice(i, i + l) === needle) {
            return i;
        }
    }
    return -1;
};