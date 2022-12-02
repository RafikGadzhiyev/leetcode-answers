/*
  Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
*/

var uniqueOccurrences = function(arr) {
    const d = {};
    for(let v of arr){
        d[v] = (d[v] || 0) + 1;
    }

    const values = Object.values(d);

    return values.length === (new Set(values)).size
};
