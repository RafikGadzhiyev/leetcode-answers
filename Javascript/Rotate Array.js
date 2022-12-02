/*
Given an array, rotate the array to the right by k steps, where k is non-negative.


*/

var rotate = function(nums, k) {
    const copy = [...nums];
    for(let i = 0; i < nums.length; ++i){
        nums[(i + k) % nums.length] = copy[i];
    }
};
