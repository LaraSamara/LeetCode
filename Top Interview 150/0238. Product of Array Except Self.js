const URL = "https://leetcode.com/problems/product-of-array-except-self/description";
var productExceptSelf = function(nums) {
    const prefix = [...nums];
    const postfix = [...nums];
    const res = [];
    for(let i = 1 ; i < prefix.length ; ++i){
        prefix[i] *= prefix[i-1];
    } 
    for(let i = postfix.length - 2 ; i >= 0 ; --i){
        postfix[i] *= postfix[i+1];
    }
    for(let i = 0 ; i < nums.length ; ++i){
        if(i === 0) res[i] = postfix[i+1];
        else if(i === nums.length-1) res[i] = prefix[i-1];
        else res[i] = prefix[i-1] * postfix[i+1];
    }
    return res;
};