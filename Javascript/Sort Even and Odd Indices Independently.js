/*
You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:

Sort the values at odd indices of nums in non-increasing order.
For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values at odd indices 1 and 3 are sorted in non-increasing order.
Sort the values at even indices of nums in non-decreasing order.
For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.
Return the array formed after rearranging the values of nums.
*/

var sortEvenOdd = function(nums) {
    let evens = [];
    let odds = [];
    for(let i = 0; i < nums.length; i += 2){
        evens.push(nums[i]);
        odds.push(nums[i + 1]);
    }
    
    evens = evens.sort((a, b) => a - b);
    odds = odds.sort((a, b) => b - a);
    for(let i  = 0; i < nums.length; ++i){
        if(i % 2) {
            nums[i] = odds[~~(i / 2)];
        }else {
            nums[i] = evens[i / 2];
        }
    }

    return nums;
};
