/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var s = s.toLowerCase();
    var arr = [];
    var arr2 = [];
    for (let i = 0; i < s.length; i++) {
        let ascii_code = s.charCodeAt(i);
        if ((ascii_code >= 48) && (ascii_code <= 57) || (ascii_code >= 97) && (ascii_code <= 122)) {
            arr.push(s[i]);
        }
    }
    
    arr2 = arr2.concat(arr); //深拷貝給arr2
    arr2 = arr2.reverse();
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr2[i]) {
            return false;
        }
    }
    
    return true;

};