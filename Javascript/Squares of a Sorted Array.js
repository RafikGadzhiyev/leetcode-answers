/*
  Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


*/

var sortedSquares = function(nums) {
    const copy = [...nums];
    let leftNumber = 0,
        rightNumber = nums.length - 1,
        squaredNumberPosition = nums.length - 1;
    while(leftNumber <= rightNumber){
        let a = Math.abs(copy[leftNumber]),
            b = Math.abs(copy[rightNumber]);
        if(a < b){
            nums[squaredNumberPosition] = b ** 2;
            rightNumber--;
        }else {
            nums[squaredNumberPosition] = a ** 2;
            leftNumber++;
        }
        squaredNumberPosition--;
    }

    return nums;
};
