/*
  A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
*/

var checkIfPangram = function(sentence) {
    // const letters = new Set([...sentence]);

    // return letters.size === 26;
    const letters = new Set();
    for(let s of sentence) {
        letters.add(s);
    }

    return letters.size === 26;
};
