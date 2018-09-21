/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var n = digits.length;
    for (var i = n -1; i >= 0; i--) {
        if (digits[i] == 9) {
            digits[i] = 0;
            if (i == 0) {
                digits.unshift(0);
                i++;
            } 
        } else {
            digits[i] += 1; 
            break;
        }
    }
    return digits;
};