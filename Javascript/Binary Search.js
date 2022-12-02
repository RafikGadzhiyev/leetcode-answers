/*
  Given an array of integers nums which is sorted in ascending order, and an integer target,
  write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

var search = function(nums, target) {
    let left = 0,
        right = nums.length;
    while(left <= right){
        let middle = Math.floor((right - left)  / 2 + left);
        if(nums[middle] === target) return middle
        else if(nums[middle] < target) left = middle + 1;
        else right = middle - 1;
    }

    return -1;
};
