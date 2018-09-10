/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profit = 0;
    var minPrice = Number.MAX_SAFE_INTEGER;

    for (i = 0; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice);
        profit = Math.max(profit, prices[i] - minPrice);
    }
    return profit;
};