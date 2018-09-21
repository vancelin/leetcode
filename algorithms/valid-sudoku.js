/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var arr = [];
    
    for (var i = 0; i < 9; i++) {
        arr = [];
        for (var j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                arr.push(board[i][j]);
            }
        }
        if (arr.length !== new Set(arr).size) {
            return false;
        }
        
        arr = [];
        for (var j = 0; j < 9; j++) {
            if (board[j][i] !== '.') {
                arr.push(board[j][i]);
            }
        }
        if (arr.length !== new Set(arr).size) {
            return false;
        }   
    }
    

    for (var i = 0; i < 9; i +=3 ) {
        for (var j = 0; j < 9; j += 3) {
            arr = [];
            for (var a = i; a < i + 3; a++) {
                for (var b = j; b < j + 3; b++) {
                    if (board[a][b] !== '.') {
                        arr.push(board[a][b]);
                    }
                }
            }
            if (arr.length !== new Set(arr).size) {
                return false;
            }
        }
    }
    return true;
    
}