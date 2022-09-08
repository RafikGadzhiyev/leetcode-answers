/*
*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
*You may assume that each input would have exactly one solution, and you may not use the same element twice.
*You can return the answer in any order.
*/

const twoSum = function (nums, target) {
    let sorted = [...nums].sort((a, b) => a - b),
        start = 0,
        end = sorted.length - 1;
    while (start < end) {
        let result = sorted[start] + sorted[end];
        if (result !== target) {
            if (result < target) {
                start++;
            } else {
                end--;
            }
        } else {
            return [nums.indexOf(sorted[start]), nums.lastIndexOf(sorted[end])];
        }
    }

    return [nums.indexOf(sorted[start]), nums.lastIndexOf(sorted[end])]
};