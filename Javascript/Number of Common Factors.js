/*
  Given two positive integers a and b, return the number of common factors of a and b.

An integer x is a common factor of a and b if x divides both a and b.
*/

var commonFactors = function(a, b) {
    let min = Math.min(a, b),
        result = 0;
    for(let i = 1; i <= min; ++i){
        if(b % i === 0 && a % i === 0) result++;
    }

    return result;
};
