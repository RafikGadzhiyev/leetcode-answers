/*
  Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.

Answers within 10-5 of the actual answer will be considered accepted.

 
*/

var trimMean = function(arr) {
    arr.sort((a, b) => a - b);
    const SKIP = arr.length * 5 / 100;
    let result = 0;
    for(let i = SKIP; i < arr.length - SKIP; ++ i){
        result += arr[i];
    }

    return (result/(arr.length - SKIP * 2)).toFixed(5);
};
