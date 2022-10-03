/*
  Given a string s and a character c that occurs in s, 
  return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

 
*/
var shortestToChar = function(s, c) {
    const result = Array(s.length).fill(Infinity);
    let pointer = 0,
        letterIndex = 0;
    
    while(pointer < s.length){
        if(s[pointer] === c){
            for(let i = 0; i < s.length; ++i){
                result[i] = Math.min(result[i], Math.abs(i - pointer));
            }
        }
        pointer++;
    }

    return  result;
};
