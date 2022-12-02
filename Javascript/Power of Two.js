/*
  Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.
*/

var isPowerOfTwo = function(n) {
   return n.toString(2).replace(/0/gi, '').length === 1;
};
