/*
  You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.
*/

var countCharacters = function(words, chars) {
    const data = {};
    for(let c of chars) {
        data[c] = (data[c] || 0) + 1;
    }
    let result = 0;
    for(let i = 0; i < words.length; ++i){
        const wData = {};
        result += words[i].length;
        for(let j = 0; j < words[i].length; ++j){
            wData[words[i][j]] = (wData[words[i][j]] || 0) + 1;
            if(wData[words[i][j]] > data[words[i][j]] || !data[words[i][j]]){
                result -= words[i].length;
                break;
            }
        }
    }

    return result;
};
