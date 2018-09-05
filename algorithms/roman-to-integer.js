/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var Romans = {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1};
    var n = s.length;
    var result = 0;

    for (i = n; i >= 0; i--) {
        if (Romans[s[i]] < Romans[s[i + 1]]) {
            result -= parseInt(Romans[s[i]]);
        } else {
            result += parseInt(Romans[s[i]]);
        }
    }
    return result;
};
