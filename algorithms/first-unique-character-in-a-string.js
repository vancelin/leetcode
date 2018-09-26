/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (let w of s) {
        if (s.indexOf(w) === s.lastIndexOf(w)) {
            return s.indexOf(w);
        }
    }
    return -1;
};