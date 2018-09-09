var judgeCircle = function(moves) {
    var x = 0;
    var y = 0;
    for (i = 0; i < moves.length; i++) {
        // console.log(moves[i]);
        if (moves[i] == 'R') {
            x += 1;
        } else if (moves[i] == 'D') {
            y += 1;
        } else if (moves[i] == 'L') {
            x -= 1;
        } else if (moves[i] == 'U') {
            y -= 1;
        }
    }
    return (x == 0 && y == 0) ? true : false;
};