/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //time O(n)
    //space O(1)
    if (prices.length===0) return 0;

    let profit =0;
    let buy = prices[0];
    for (let i=1; i<prices.length; i++) {
        buy = Math.min(buy, prices[i]); //1

        if (prices[i]>buy) {
            //also use math.max to keep track of max profit
            profit = Math.max(profit,prices[i] - buy)
        }
    }

    return profit;
};