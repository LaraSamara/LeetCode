const URL = "https://leetcode.com/problems/different-ways-to-add-parentheses/description";
var diffWaysToCompute = function(expression) {
    const memo = new Map();
    function solve(exp){
        if(memo.has(exp)) return memo.get(exp);
        let res = [];
        for(let i = 0 ; i < exp.length ; ++i){
            const char = exp[i];
            if(char === '+' || char === '-' || char === '*'){
                const left = solve(exp.slice(0, i));
                const right = solve(exp.slice(i+1));
                for(const l of left){
                    for(const r of right){
                        if(char === '+'){
                            res.push(l+r);
                        }else if(char === '-'){
                            res.push(l-r);
                        }else if(char === '*'){
                            res.push(l*r);
                        }
                    }
                }
            }
        }
        if(res.length === 0) res.push(parseInt(exp));
        memo.set(exp, res);
        return res;
    }  
    return solve(expression);
};
