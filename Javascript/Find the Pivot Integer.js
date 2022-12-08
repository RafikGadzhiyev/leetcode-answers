/*
  Given a positive integer n, find the pivot integer x such that:

The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

*/

var pivotInteger = function(n) {
    if(n === 1) return n;
    const sum = Array.from({length: n}, (_, i) => ++i);

    for(let i = 1; i < sum.length; ++i){
        sum[i] += sum[i - 1];
    }

    for(let i = 0; i < sum.length; ++i){
        if(sum[i] === (sum[sum.length - 1] - sum[i - 1])) return i + 1;
    }

    return  -1;
};
