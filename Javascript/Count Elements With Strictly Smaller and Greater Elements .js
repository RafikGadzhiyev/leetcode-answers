/*
  Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.
*/

var countElements = function(nums) {
    nums.sort((a, b) => a - b);
    let total = 0;
    for(let i = 1; i < nums.length - 1; ++i){
        let is = [false, false];
        for(let j = 0; j < nums.length; ++j){
            if(j < i && nums[j] < nums[i]) is[0] = true;
            else if(j > i && nums[j] > nums[i]) is[1] = true; 
        }
        total += is[0] && is[1] && 1;
    }

    return total;
};
