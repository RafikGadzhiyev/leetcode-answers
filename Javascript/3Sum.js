/*
*Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
*Notice that the solution set must not contain duplicate triplets.
*/

const threeSum = function (nums) {
    const result = [];
    if (nums.length < 3) return result;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; ++i) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1,
            right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left++;
                right--
            } else if (sum > 0) right--;
            else left++;
        }
    }

    return result
};

