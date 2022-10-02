/*
  Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
*/

var smallestEvenMultiple = function(n) {
    // Like a programmer //
  
    // let start = n;
    // while(start % 2 !== 0 || start % n !== 0) start++;
    // return start;    
  
    // Like a math //
    return n * ((n % 2) + 1)
};
