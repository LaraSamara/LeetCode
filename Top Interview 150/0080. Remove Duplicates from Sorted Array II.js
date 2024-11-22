const URL = "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description";
var removeDuplicates = function(nums) {
    let index = 2;
    for(let i = 2 ; i < nums.length ; i++){
        if(nums[i] !== nums[index-1] || nums[i] !== nums[index-2]){
            nums[index++] = nums[i];
        }
    }
    return index;
};
