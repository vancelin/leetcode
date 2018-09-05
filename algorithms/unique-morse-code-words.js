/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var moz_map = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
    var new_arr = new Set();

    for(i = 0; i < words.length; i++) {
        var fully_str = "";
        for(j = 0; j < words[i].length; j++) {
            var split_str = "";
            for(k = 0; k < letter.length; k++) {
                if (letter[k] === words[i][j]) {
                    split_str += moz_map[k];
                }
            }
            fully_str += split_str;
        }
        new_arr.add(fully_str);
    }
    return new_arr.size;
};