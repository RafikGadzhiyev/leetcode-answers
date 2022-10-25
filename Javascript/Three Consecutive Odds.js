/*
  Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
*/

var threeConsecutiveOdds = function(arr) {
    for(let i = 1; i < arr.length - 1; i++){
        if(arr[i - 1] % 2 === 1 && arr[i] % 2 === 1 && arr[i + 1] % 2 === 1) return true;
    }

    return false;
};
