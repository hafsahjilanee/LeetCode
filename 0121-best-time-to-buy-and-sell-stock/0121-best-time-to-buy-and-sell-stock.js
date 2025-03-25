/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minBuy = prices[0];

    for (let i = 1; i<prices.length; i++) {
        minBuy = Math.min(minBuy, prices[i]);

        if (prices[i]> minBuy) {
            maxProfit = Math.max(maxProfit, prices[i]-minBuy);
        }
    }

    return maxProfit;
};