/*
  Given an integer array nums of 2n integers, 
  group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
*/

var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let result = 0;
  
    // Alternate variant //
    // for(let i = 1; i < nums.length; i += 2){
    //     result += Math.min(nums[i], nums[i - 1]);
    // }

    for(let i = 0; i < nums.length;  i += 2){
        result += nums[i];
    }

    return result;
};
