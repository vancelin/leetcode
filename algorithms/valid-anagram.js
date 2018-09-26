/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
    
    let ascii_arr1 = new Array(26).fill(0);
    let ascii_arr2 = new Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        ascii_arr1[s.charCodeAt(i) - 97]++;
    }
    
    for (let i = 0; i < t.length; i++) {
        ascii_arr2[s.charCodeAt(i) - 97]++;
    }
    
    for(let i = 0; i < ascii_arr1.length; i++) {
        if (ascii_arr1[i] !== ascii_arr2[i]) {
            return false;
        }
    }
    
    return true;
};