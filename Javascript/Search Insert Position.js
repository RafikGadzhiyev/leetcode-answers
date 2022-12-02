/*
  Given a sorted array of distinct integers and a target value, return the index if the target is found. 
  If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.


*/

var searchInsert = function(nums, target) {
    let start = 0,
        end = nums.length,
        computedIndex = 0;
    
    while(start <= end){
        let middle = Math.floor(start + (end - start) / 2);
        if(nums[middle] == target) return middle;
        else if(nums[middle] < target){
            computedIndex = middle + 1;
            start = middle + 1;
        }else end = middle - 1;
    }

    return computedIndex;
};
