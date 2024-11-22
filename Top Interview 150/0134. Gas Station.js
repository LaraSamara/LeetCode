const URL = "https://leetcode.com/problems/gas-station/description";
var canCompleteCircuit = function(gas, cost) {
    let[gasSum, costSum] = [0, 0];
    for(let i = 0 ; i < gas.length ; ++i){
        gasSum += gas[i];
        costSum += cost[i];
    }
    if(gasSum < costSum) return -1;
    let[total, start] = [0, 0];
    for(let i = 0 ; i < gas.length ; ++i){
        total += gas[i] - cost[i];
        if(total < 0){
            total = 0;
            start = i + 1;
        }
    }
    return start;
};