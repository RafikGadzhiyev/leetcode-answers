// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

var permute = function(nums) {
  const result = [];
  const bt = (curr = []) => {
    if(curr.length === nums.length) {
      result.push(curr.slice());
      return;
    }
    for(let i = 0; i < nums.length; ++i){
      if(curr.indexOf(nums[i]) !== -1) continue;
      curr.push(nums[i]);
      bt(curr);
      curr.pop();
    }
  }

  bt();

  return result
};
