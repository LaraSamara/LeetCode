const URL = "https://leetcode.com/problems/merge-sorted-array/description";
var merge = function(nums1, m, nums2, n) {
    let size = n + m - 1;
    n--;
    m--;
    while(n >= 0 && m >= 0){
        if(nums1[m] > nums2[n]) nums1[size--] = nums1[m--];
        else nums1[size--] = nums2[n--];
    }
    while(n >= 0){
        nums1[size--] = nums2[n--];
    }
};
