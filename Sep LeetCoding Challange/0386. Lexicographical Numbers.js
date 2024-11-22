const URL ="https://leetcode.com/problems/lexicographical-numbers/description";
var lexicalOrder = function(n) {
    const res = [];
    function dfs(current){
        if(current > n) return;
        res.push(current);
        for(let i = 0 ; i <= 9 ; ++i){
            const value = current * 10 + i;
            if(value > n) return;
            dfs(value);
        }
    }    
    for(let i = 1 ; i <= 9 ; ++i){
        if(i > n) break;
        dfs(i);
    }
    return res;
};