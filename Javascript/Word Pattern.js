/*
  Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
*/

var wordPattern = function(pattern, s) {
    const hash = Array(26).fill(-1);
    const OFFSET = 97;
    const words = s.split(" ");
    const visited = new Set();
    if(words.length !== pattern.length) return false;
    for(let i = 0; i < pattern.length; ++i){
        let index = pattern[i].charCodeAt(0) - OFFSET;
        if((hash[index] !== -1 && hash[index] !== words[i]) || (hash[index] === -1 && visited.has(words[i]))) return false;
        hash[index] = words[i];
        visited.add(words[i]);
    }    

    return true;
};
