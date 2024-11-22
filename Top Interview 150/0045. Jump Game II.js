const URL = "https://leetcode.com/problems/jump-game-ii/description";
var jump = function(nums) {
    let[near, far, jumps] = [0, 0, 0];
    while(far < nums.length -1){
        let farthest = 0;
        for(let i = near ; i <= far ; ++i){
            farthest = Math.max(farthest, i + nums[i]);
        }
        near = far + 1;
        far =  farthest;
        jumps++;
    }
    return jumps;
};