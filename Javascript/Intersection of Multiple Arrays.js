/*
Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, 
return the list of integers that are present in each array of nums sorted in ascending order.
*/

var intersection = function(nums) {
    // const data = {};
    // const TOTAL_REPEATS = nums.length;
    // const result = [];
    // for(let i = 0; i < nums.length; ++i){
    //     for(let j = 0; j < nums[i].length;  ++j){
    //         data[nums[i][j]] = (data[nums[i][j]] || 0) + 1;
    //         if(data[nums[i][j]] === TOTAL_REPEATS) result.push(nums[i][j]);
    //     }
    // }

    // return result.sort((a, b) => a - b);
    const result = [];
    for(let i = 0; i < nums[0].length; ++i){
        let flag = true,
            start = 1;
            while(start < nums.length){
                if(!nums[start].includes(nums[0][i])) {
                    flag = false;
                    break;
                }
                start++;
            }
            if(flag) result.push(nums[0][i]);
    }

    return result.sort((a, b) => a - b);
};
