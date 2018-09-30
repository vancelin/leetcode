/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var resultStr = "1";
    for (var i = 1; i < n; i++) {
        var repeatCount = 1;
        var str = "";
        for (var j = 0; j < resultStr.length; j++) {
            if (resultStr[j] == resultStr[j + 1]) {
                repeatCount++;
                console.log("repeatCount" + repeatCount);
            } else {
                str += repeatCount + resultStr[j];
                console.log(str);
                repeatCount = 1;
            }
            console.log("i = " + i);
            console.log("j = " + j);
        }
        resultStr = str;
    }
    return resultStr;
};

console.log(countAndSay(4));