const URL = "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description";
var maxProfit = function(prices) {
    let[Profit, left] = [0, prices[0]];
    for(const right of prices){
        if(right < left) left = right;
        else Profit = Math.max(Profit, right-left);
    }
    return Profit;
};