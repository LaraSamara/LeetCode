const URL = "https://leetcode.com/problems/majority-element/description";
var majorityElement = function(nums) {
    const map = new Map();
    const major = Math.floor(nums.length / 2);
    for(const num of nums){
        map.set(num, map.has(num)?map.get(num)+1: 1);
        if(map.get(num) > major) return num;
    }
};