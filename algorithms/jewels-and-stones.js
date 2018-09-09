/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(j, s) {
    var jewelry = 0;
    for (i = 0; i < j.length; i++) {
        for (k = 0; k < s.length; k++) {
            if (j[i] === s[k]) {
               jewelry++;
            }
        }
    }
    return jewelry;
};