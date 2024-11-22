const URL = "https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/description";
var findKthNumber = function(n, k) {
    let current = 1;
    k--;
    while(k > 0){
        const steps = countSteps(n, current, current+1);
        if(steps <= k){
            k -= steps;
            current++;
        }else{
            k--;
            current *= 10;
        }
    }
    return current;    
};
function countSteps(n, current, next){
    let steps = 0;
    while(current <= n){
        steps += Math.min(n+1, next) - current;
        next *= 10;
        current *= 10;
    }
    return steps;
};