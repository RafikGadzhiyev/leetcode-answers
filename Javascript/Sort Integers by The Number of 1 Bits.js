/*
  You are given an integer array arr. 
  Sort the integers in the array in ascending order by the number of 1's in their binary representation 
  and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

Return the array after sorting it.
*/

var sortByBits = function(arr) {
    const data = {};
    for(let a of arr){
        let totalOnes = a.toString(2).replaceAll('0', '').length;
        if(data[totalOnes]) data[totalOnes].push(a);
        else data[totalOnes] = [a];
    }

    const keys = Object.keys(data);
    const result = [];
    for(let key of keys){
        result.push(...(data[key].sort((a, b) => a - b)));
    }

    return result
};
