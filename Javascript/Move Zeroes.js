/*
  Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

*/

var moveZeroes = function(nums) {
    let zero = 0,
        nonZero = 1;
    while(nonZero < nums.length) {
        if(nums[zero] !== 0) {
            zero ++;
        }
        [nums[zero], nums[nonZero]] = [nums[nonZero], nums[zero]]
        nonZero++;        
    }
};
