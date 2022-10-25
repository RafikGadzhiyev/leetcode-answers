/*
Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

Return the positive integer k. If there is no such integer, return -1.
*/

var findMaxK = function(nums) {
    let result = -1;
    const values = new Set();
    for(let i = 0; i < nums.length; ++i){
        if(values.has(-nums[i])) result = Math.max(result, Math.abs(nums[i]));
        else values.add(nums[i]);
    }

    return result;
};
