const URL = "https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/description";
var longestCommonPrefix = function(arr1, arr2) {
    if(arr1.length > arr2.length){
        [arr1, arr2] = [arr2, arr1];
    }
    const set = new Set();
    let res = 0;
    for(let n of arr1){
        while(n && !set.has(n)){
            set.add(n);
            n = Math.floor(n / 10);
        }
    }
    for(let n of arr2){
        while(n && (!set.has(n))){
            n = Math.floor(n / 10);
        } 
        if(set.has(n)){
            res = Math.max(res, String(n).length);
        }
    }
    return res;
};
