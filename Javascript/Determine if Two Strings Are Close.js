/*
  Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
*/

var closeStrings = function(word1, word2) {
    if(word1.length < word2.length) return false;
    const LETTERS = 26;
    const w1 = Array(LETTERS).fill(0);
    const w2 = Array(LETTERS).fill(0);
    const OFFSET = 97;
    for(let w of word1){
        w1[w.charCodeAt(0) - OFFSET]++;
    }
    for(let w of word2){
        w2[w.charCodeAt(0) - OFFSET]++;
    }
    for(let i = 0; i < LETTERS; ++i){
        if((w1[i] === 0 & w2[i] !== 0) || (w1[i] !== 0 && w2[i] === 0)) return false
    }
    
    w1.sort((a, b) => a - b);
    w2.sort((a, b) => a - b);
    for(let i = 0; i < LETTERS; ++i){
        if(w1[i] !== w2[i]) return false;
    }
    return true;
};
