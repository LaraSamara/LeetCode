const URL = "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description";
var strStr = function(haystack, needle) {
    for(let i = 0 ; i <= haystack.length-needle.length ; ++i){
        if(haystack.slice(i, i + needle.length) == needle){
            return i;
        }
    }
    return -1;
};
// Another Solution 

var strStr = function (haystack, needle) {
    if (haystack.length < needle.length) {
        return -1;
    }
    for (let i = 0; i < haystack.length; ++i) {
        if (haystack.length - i < needle.length) {
            return -1;
        }
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] != needle[j]) {
                break;
            }
            if (j == needle.length - 1) return i;
        }
    }
    return -1;
};