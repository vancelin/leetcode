/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxValue = 0;
    var tmp = 0;
    
    for(i = prices.length - 1; i >= 0; i--) {
        for (j = prices.length - 1; j >= 0; j--) {
            tmp = prices[i] - prices[j];
            if ((tmp > maxValue) && i > j) { // i > j 因為先買後賣，所以省去部分的窮舉
                maxValue = tmp;
            }
        }
    }
    return maxValue;
};