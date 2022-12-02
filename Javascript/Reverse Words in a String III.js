/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.  
*/


var reverseWords = function(s) {
    s = s.split(' ');
    for(let i = 0; i < s.length; ++i){
        let left = 0,
            word = [...s[i]];
        while(left < Math.floor(word.length / 2)){
            [word[left], word[word.length - left - 1]] = [word[word.length - 1 - left], word[left]];
            left++;
        }
        s[i] = word.join``;
    }

    return s.join` `;
};
