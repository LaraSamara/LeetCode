const URL = "https://leetcode.com/problems/longest-common-prefix/description/";

var longestCommonPrefix = function(strs) {
    let prefix = "";
    for(let i = 0 ; i < strs[0].length ; ++i){
        for(let j = 1 ; j < strs.length ; j++){
            if(strs[0][i] !== strs[j][i]){
                return prefix;
            }
        }
        prefix += strs[0][i];
    }
    return prefix;
};
// Another Solution 
var longestCommonPrefix = function(strs) {
    let stack = [];
    for(let i = 0 ; i < strs[0].length ; ++i){
        stack.push(strs[0][i]);
    }
    for(let j = 1 ; j < strs.length ; ++j){
        let i = 0;
        while(i < stack.length && i < strs[j].length){
            if(strs[j][i] !== stack[i]){
                    break;
            }
            i++;
        }
        while(stack.length > i){
                stack.pop();
        }
    }
    if(stack.length === 0) return "";
    else return stack.join("");
};
