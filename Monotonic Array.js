/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.
*/

var isMonotonic = function(nums) {
    let v = nums[0] < nums[nums.length - 1];
    for(let i = 1; i < nums.length; ++i){
        if((v &&  nums[i] < nums[i - 1]) || (!v && nums[i] > nums[i - 1])) return false;
    }

    return true;
};
