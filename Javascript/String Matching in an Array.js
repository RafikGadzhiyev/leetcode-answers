/*
Given an array of string words. Return all strings in words which is substring of another word in any order. 

String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].
*/

var stringMatching = function(words) { 
    words.sort((a, b) => a.length - b.length);
    const result = [];
    for(let i = 0; i < words.length; ++i){
        for(let j = i + 1; j < words.length; ++j){
            if(words[j].includes(words[i])){
                result.push(words[i]);
                break;
            };
        }
    }

    return result;
};
