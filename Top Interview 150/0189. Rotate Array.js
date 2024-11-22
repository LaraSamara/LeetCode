const URL = "https://leetcode.com/problems/rotate-array/description";
var rotate = function(nums, k) {
    const n = nums.length;
    k %= n;
    reverse(nums, 0,n-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, n-1);
};
var reverse = function(arr, left, right){
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}
/*
*********************************************
another solution 1
********************************************** 
var rotate = function(nums, k) {
    const n = nums.length;
    k %= n;
    let tmp = nums.slice(-k).concat(nums.slice(0, -k)); 
    for(let i = 0 ; i < n ; ++i){
        nums[i] = tmp [i];
    }
};
**********************************************
another solution 2
**********************************************
var rotate = function(nums, k) {
    const n = nums.length;
    k %= n;
    const rotated = new Array(n).fill(0);
    for(let i = 0 ; i < n ; ++i){
        rotated[(i+k)%n] = nums[i];
    }
    for
    (let i = 0 ; i < n ; ++i){
        nums[i] = rotated[i];
    }
};
 */