const URL = "https://leetcode.com/problems/h-index/description";
var hIndex = function(citations) {
    citations.sort((a,b) => b-a)
    let h = 0;
    for(let i = 0 ; i < citations.length ; i++){
        if(citations[i] >= i+1) h++;
        else return h;
    }
    return h;
};