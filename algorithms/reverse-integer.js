/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const max_int = Math.pow(2, 31) - 1;
    const min_int = Math.pow(-2, 31);
    var prefix = "";
    var nx = x.toString();
    if (x < 0) {
        var prefix = "-";
        var nx = nx.substr(1, x.length);
    }
    
    var nx = Number(prefix + nx.split("").reverse().join(""));
    
    if ((nx < max_int) && (nx > min_int)) {
        return nx;
    } else {
        return 0;
    }
    
};