/*
  You are given a 0-indexed integer array nums of length n.

The average difference of the index i is the absolute difference between the average of the first i + 1 elements of nums and the average of the last n - i - 1 elements. 
Both averages should be rounded down to the nearest integer.

Return the index with the minimum average difference. If there are multiple such indices, return the smallest one.

Note:

The absolute difference of two numbers is the absolute value of their difference.
The average of n elements is the sum of the n elements divided (integer division) by n.
The average of 0 elements is considered to be 0.
*/

var minimumAverageDifference = function(nums) {
    let result = 0,
        minDifference = Infinity;
    for(let i = 1; i < nums.length; ++i){
        nums[i] += nums[i - 1];
    }
    for(let i = 0; i < nums.length; ++i){
        let leftSum = nums[i],
            rightIndex = nums.length - i - 1,
            leftSide = Math.floor(leftSum / (i + 1)),
            rightSide = Math.floor((nums[nums.length - 1] - leftSum) / (rightIndex !== 0 ? rightIndex : 1));
            currentDifference = Math.abs(leftSide - rightSide);
        if(minDifference > currentDifference) {
            result = i;
            minDifference = currentDifference;
        }
    }

    return result;
};
