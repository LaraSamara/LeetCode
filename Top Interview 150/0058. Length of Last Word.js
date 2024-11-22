const URL = "https://leetcode.com/problems/length-of-last-word/description/";
var lengthOfLastWord = function(s) {
    let result = 0;
    for(let i = s.length-1 ; i >= 0 ; i--){
        if(s[i] === ' ' && result){
            break;
        }else if(s[i] !== ' '){
            result++;
        }
    }
    return result;
};
//  Another Solution

var lengthOfLastWord = function(s) {
    let array = s.trim().split(" ");
    return array.slice(-1)[0].length;
};