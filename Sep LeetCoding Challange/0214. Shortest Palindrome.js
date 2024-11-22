const URL = "https://leetcode.com/problems/shortest-palindrome/description";
var shortestPalindrome = function(s) {
    const reverseS = s.split("").reverse().join("");
    if(reverseS === s) return s;
    for(let i = 0 ; i < s.length ; ++i){
        if(s.substring(0, s.length-i) === reverseS.substring(i)){
            return reverseS.substring(0, i) + s;
        }
    }
    return "";
};