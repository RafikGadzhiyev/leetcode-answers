/*
  Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/

var reverseString = function(s) {
    let left = 0;
    
    while(left < Math.floor(s.length / 2)){
        [s[left], s[s.length - 1 - left]] = [s[s.length - 1 - left], s[left]];
        left++;
    }
};
