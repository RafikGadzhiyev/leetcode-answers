/*
  Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
*/

var permute = function(nums) {
    const result = [];
    const bt = (a = []) => {
        if(a.length === nums.length){
            result.push(a);
        }
        for(let i = 0; i < nums.length; ++i){
            if(a.indexOf(nums[i]) !== -1) continue;
            bt([...a, nums[i]])
        }
    }
    bt();

    return result;
};
