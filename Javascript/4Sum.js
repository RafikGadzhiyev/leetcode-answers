/*
*Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
*0 <= a, b, c, d < n
*a, b, c, and d are distinct.
*nums[a] + nums[b] + nums[c] + nums[d] == target
*You may return the answer in any order.
*/

const fourSum = function (nums, target) {
    const result = [];
    if (nums.length < 4) return result;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; ++i) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length; ++j) {
            if (j > 1 && nums[j] === nums[j - 1] && j - 1 !== i) continue;
            let start = j + 1,
                end = nums.length - 1;
            while (start < end) {
                let sum = nums[i] + nums[j] + nums[start] + nums[end];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[start], nums[end]]);
                    while (nums[start] === nums[start + 1]) start++;
                    while (nums[end] === nums[end - 1]) end--;
                    start++;
                    end--;
                } else if (sum > target) end--;
                else start++;
            }
        }
    }

    return result;
};
