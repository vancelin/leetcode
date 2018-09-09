/**
 * @param {string} s
 * @return {string}
 */
// 先讀取字串，將讀取到的第一個字放到新變量的最後一個，依序放入新的，再組合成字串
var reverseString = function(s) {
    var x = [];
    for (i = 0; i < s.length; i++) {
        x.unshift(s[i]);
    }
    return x.join("");
};